import { auth } from "@clerk/nextjs/server";
import { generateVideo } from "@repo/common/types";
import PrismaClient from "@repo/db/client";
import { FalAiModel } from "models/FalAiModel";
import { NextRequest, NextResponse } from "next/server";

const falAiModel = new FalAiModel();

export async function POST(req: NextRequest) {
    const parsedBody = generateVideo.safeParse(await req.json())
    const {userId} = await auth()
    if (!parsedBody.success || !userId) {
        console.log(parsedBody.error)
        return NextResponse.json({
                message: "Incorrect Inputs"
            },{
                status: 411
            }
        )
    }

    const {prompt, imageName, resolution, generateAudio} = parsedBody.data;
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
    if (balance.FAI < 8 && !generateAudio) {
        return NextResponse.json({
          message: "Not enough FAI tokens"
        }, {status: 402})
    }
    else if (balance.FAI < 10 && generateAudio) {
        return NextResponse.json({
          message: "Not enough FAI tokens"
        }, {status: 402})
    }
    if (!parsedBody.success || !userId) {
      return NextResponse.json({
              message: "Incorrect Inputs"
          },{
              status: 411
          }
      )
    }

    const imageUrl = "https://my-ai-generator.s3.us-east-1.amazonaws.com/" + imageName
    
    let requestId = ""
    if (imageName) {
        const {request_id} = await falAiModel.imageToVideo(prompt, resolution, generateAudio, imageUrl)
        requestId = request_id
    } else {
        const {request_id} = await falAiModel.textToVideo(prompt, resolution, generateAudio)
        requestId = request_id
    }

    const data = await PrismaClient.outputVideos.create({
        data: {
            userId, 
            prompt, 
            falAiRequestId: requestId,
            videoType: imageName ? "ImageToVideo" : "TextToVideo",
            generateAudio
        }
    })
    await PrismaClient.fAITokenAccount.update({
        where: {
            userId
        }, 
        data: {
            FAI: {
                decrement: generateAudio ? 10 : 8
            },
            PendingTokens: {
                increment: generateAudio ? 10 : 8
            }
        }
    })
     
    return NextResponse.json({
        message: "request sucessful"
    })
}