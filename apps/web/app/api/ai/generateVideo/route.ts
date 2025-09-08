import { auth } from "@clerk/nextjs/server";
import { generateImage, generateVideo } from "@repo/common/types";
import PrismaClient from "@repo/db/client";
import { FalAiModel } from "models/FalAiModel";
import { NextRequest, NextResponse } from "next/server";

const falAiModel = new FalAiModel();

export async function POST(req: NextRequest) {
    const parsedBody = generateVideo.safeParse(await req.json())
    const {userId} = await auth()
    if (!parsedBody.success || !userId) {
        return NextResponse.json({
                message: "Incorrect Inputs"
            },{
                status: 411
            }
        )
    }

    const {prompt, imageUrl, resolution, generateAudio} = parsedBody.data;
    
    let requestId = ""
    if (imageUrl) {
        const {request_id} = await falAiModel.imageToVideo(prompt, resolution, generateAudio == "true" ? true : false, imageUrl)
        requestId = request_id
    } else {
        const {request_id} = await falAiModel.textToVideo(prompt, resolution, generateAudio == "true" ? true : false)
        requestId = request_id
    }

    const data = await PrismaClient.outputVideos.create({
        data: {
            userId, 
            prompt, 
            falAiRequestId: requestId,
            videoType: imageUrl ? "ImageToVideo" : "TextToVideo",
            generateAudio: generateAudio == "true" ? true : false
        }
    })
     
    return NextResponse.json({
        message: "request sucessful"
    })
}