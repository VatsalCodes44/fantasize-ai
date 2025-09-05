import {s3, write, S3Client} from "bun"
import PrismaClient from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";


export async function POST (req: NextRequest) {
    const body = await req.json();
    if (!body || !body.request_id || !body.imageUrl) {
        return NextResponse.json({
                message: "Incorrect Inputs"
            },{
                status: 411
            }
        )
    }
    const request_id: string = body.request_id;
    const image_url: string = body.image_url;
    await PrismaClient.outputImages.updateMany({
        where: {
            falAiRequestId: request_id,
        },
        data: {
            status: "generated",
            imageUrl: image_url,
            createdAt: new Date()
        }
    })
    return NextResponse.json({
        message: "web hook recieved"
    })
}