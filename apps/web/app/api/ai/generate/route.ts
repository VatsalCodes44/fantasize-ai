import { auth } from "@clerk/nextjs/server";
import { generateImage } from "@repo/common/types";
import PrismaClient from "@repo/db/client";
import { FalAiModel } from "models/FalAiModel";
import { NextRequest, NextResponse } from "next/server";

const falAiModel = new FalAiModel();

export async function POST(req: NextRequest) {
    const parsedBody = generateImage.safeParse(await req.json())
    const {userId} = await auth()
    if (!parsedBody.success || !userId) {
        return NextResponse.json({
                message: "Incorrect Inputs"
            },{
                status: 411
            }
        )
    }
    const {prompt, modelId, num} = parsedBody.data;

    const model = await PrismaClient.model.findUnique({
        where: {
            id: modelId
        }
    })

    if (!model || !model.tensorPath) {
        return NextResponse.json({
                message: "Incorrect Inputs"
            },{
                status: 411
        })
    }

    const falAiModel = new FalAiModel();
    const {request_id, response_url} = await falAiModel.generateImage(prompt,model.tensorPath, num)
    let modifiedPrompt = ""
    if (model.bald) {
        modifiedPrompt = `${model.age}-year-old ${model.ethinicity} bald ${model.type} with ${model.eyeColor}, ${prompt}`
    } else {
        modifiedPrompt = `${model.age}-year-old ${model.ethinicity} ${model.type} with ${model.eyeColor}, ${prompt}`
    }

    const data = await PrismaClient.outputImages.create({
        data: {
            userId, 
            prompt, 
            modelId, 
            falAiRequestId: request_id
        }
    })
     
    return NextResponse.json({
        message: "request sucessful"
    })
}