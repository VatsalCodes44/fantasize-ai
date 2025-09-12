import PrismaClient from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";


import crypto from "crypto"
import sodium from "libsodium-wrappers"
import fetch from "node-fetch"

type FalJWK = {
  kty: "OKP";
  crv: "Ed25519";
  kid: string;
  use?: "sig";
  alg?: "EdDSA";
  x: string;
};

type FalJWKS = {
  keys: FalJWK[];
};

const JWKS_URL = 'https://rest.alpha.fal.ai/.well-known/jwks.json';
const JWKS_CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
let jwksCache:FalJWK[] | null = null;
let jwksCacheTime = 0;


async function fetchJwks(): Promise<FalJWK[]> {
    const currentTime = Date.now();
    if (!jwksCache || (currentTime - jwksCacheTime) > JWKS_CACHE_DURATION) {
        const response = await fetch(JWKS_URL);
        if (!response.ok) throw new Error(`JWKS fetch failed: ${response.status}`);
        const res = await response.json() as FalJWKS;
        jwksCache = res.keys || [];
        jwksCacheTime = currentTime;
    }
    return jwksCache;
}

async function verifyWebhookSignature(requestId: string, userId: string, timestamp:string, signatureHex:string, body: Buffer) {
    /*
     * Verify a webhook signature using provided headers and body.
     *
     * @param {string} requestId - Value of x-fal-webhook-request-id header.
     * @param {string} userId - Value of x-fal-webhook-user-id header.
     * @param {string} timestamp - Value of x-fal-webhook-timestamp header.
     * @param {string} signatureHex - Value of x-fal-webhook-signature header (hex-encoded).
     * @param {Buffer} body - Raw request body as a Buffer.
     * @returns {Promise<boolean>} True if the signature is valid, false otherwise.
     */
    await sodium.ready;

    // Validate timestamp (within ±5 minutes)
    try {
        const timestampInt = parseInt(timestamp, 10);
        const currentTime = Math.floor(Date.now() / 1000);
        if (Math.abs(currentTime - timestampInt) > 300) {
            console.error('Timestamp is too old or in the future.');
            return false;
        }
    } catch (e) {
        console.error('Invalid timestamp format:', e);
        return false;
    }

    // Construct the message to verify
    try {
        const messageParts = [
            requestId,
            userId,
            timestamp,
            crypto.createHash('sha256').update(body).digest('hex')
        ];
        if (messageParts.some(part => part == null)) {
            console.error('Missing required header value.');
            return false;
        }
        const messageToVerify = messageParts.join('\n');
        const messageBytes = Buffer.from(messageToVerify, 'utf-8');

        // Decode signature
        let signatureBytes;
        try {
            signatureBytes = Buffer.from(signatureHex, 'hex');
        } catch (e) {
            console.error('Invalid signature format (not hexadecimal).');
            return false;
        }

        // Fetch public keys
        let publicKeysInfo;
        try {
            publicKeysInfo = await fetchJwks();
            if (!publicKeysInfo.length) {
                console.error('No public keys found in JWKS.');
                return false;
            }
        } catch (e) {
            console.error('Error fetching JWKS:', e);
            return false;
        }

        // Verify signature with each public key
        for (const keyInfo of publicKeysInfo) {
            try {
                const publicKeyB64Url = keyInfo.x;
                if (typeof publicKeyB64Url !== 'string') continue;
                const publicKeyBytes = Buffer.from(publicKeyB64Url, 'base64url');
                const isValid = sodium.crypto_sign_verify_detached(signatureBytes, messageBytes, publicKeyBytes);
                if (isValid) return true;
            } catch (e) {
                console.error('Verification failed with a key:', e);
                continue;
            }
        }

        console.error('Signature verification failed with all keys.');
        return false;
    } catch (e) {
        console.error('Error constructing message:', e);
        return false;
    }
}


export async function POST (req: NextRequest) {
    const arrayBuffer = await req.arrayBuffer(); // raw bytes
    const bodyBuffer = Buffer.from(arrayBuffer); // convert to Node Buffer

    const requestId = req.headers.get("x-fal-webhook-request-id");
    const userId = req.headers.get("x-fal-webhook-user-id");
    const timeStamp = req.headers.get("x-fal-webhook-timestamp");
    const webhookSignature = req.headers.get("x-fal-webhook-signature");

    const isValid = await verifyWebhookSignature(
    requestId!,
    userId!,
    timeStamp!,
    webhookSignature!,
    bodyBuffer
    );

    const body = JSON.parse(Buffer.from(arrayBuffer).toString("utf-8"));

    console.log(body)

    if (!isValid) {
        return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
    }
    if (body.status=="ERROR") {
        return NextResponse.json({
            message: "error occured"
        },{status:422})
    }
    const request_id: string = body.request_id;
    const images: {url:string, width: number, height: number, "content/type": string} []= body.payload.images;
    const dbRequests = await Promise.all(images.map((image)=>{
        return PrismaClient.outputImages.updateMany({
            where: {
                falAiRequestId: request_id,
            },
            data: {
                status: "generated",
                imageUrl: {
                    push: image.url
                },
                createdAt: new Date()
            }
        })
    }))
    return NextResponse.json({
        message: "web hook recieved"
    })
}