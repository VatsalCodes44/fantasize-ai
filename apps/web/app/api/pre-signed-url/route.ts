import { S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";

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
    console.log("Generating presigned URL...");
    const Key = `models/${Date.now()}_${Math.random()}.zip`;
    const presignedUrl = await getSignedUrl(
      s3Client,
      new PutObjectCommand({
        Bucket: process.env.bucket!,  // ← Matches your env var
        Key ,
      }),
      { expiresIn: 3600 }
    );

    console.log("Presigned URL generated");
    return NextResponse.json({ url: presignedUrl, Key });

  } catch (error) {
    console.error("Error generating presigned URL:", error);
    return NextResponse.json(
      { error: "Failed to generate upload URL" },
      { status: 500 }
    );
  }
}