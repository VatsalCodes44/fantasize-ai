import { S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";
import { trainModel } from "@repo/common/types";
import PrismaClient from "@repo/db/client";
import { auth } from "@clerk/nextjs/server";

// Initialize S3 client - USE YOUR EXACT ENV VARIABLE NAMES
const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.accessKeyId!,       // ← Matches your env var
    secretAccessKey: process.env.secretAccessKey!, // ← Matches your env var
  },
});

export async function GET(req: NextRequest) {
  try {
    const { userId } = await auth()
    if (!userId) {
        return NextResponse.json({message:'Unauthorized'}, { status: 401 })
    }
    const body = await req.json()
    const parsedBody = trainModel.safeParse(body);
    const balance = await PrismaClient.fAITokenAccount.findUnique({
        where: {
                userId: userId!
            }
    })
    if (!balance) {
    return NextResponse.json({
        message: "Account not found"
    }, { status: 402 });
    }
    if (balance.FAI < 20) {
      return NextResponse.json({
        message: "Not enough FAI tokens"
      }, {status: 402})
    }
    console.log("Generating presigned URL...");
    const Key = `models/${Date.now()}_${Math.random()}.zip`;
    const presignedUrl = await getSignedUrl(
      s3Client,
      new PutObjectCommand({
        Bucket: process.env.bucket, 
        Key,
        ContentType: "application/zip"
      }),
      { 
        expiresIn: 90,
      }
    );

    console.log("Presigned URL generated", presignedUrl);
    return NextResponse.json({ url: presignedUrl, Key });

  } catch (error) {
    console.error("Error generating presigned URL:", error);
    return NextResponse.json(
      { error: "Failed to generate upload URL" },
      { status: 500 }
    );
  }
}