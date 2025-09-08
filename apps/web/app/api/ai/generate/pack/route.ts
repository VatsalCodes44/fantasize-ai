import { auth } from "@clerk/nextjs/server";
import { generateImageFromPack } from "@repo/common/types";
import PrismaClient from "@repo/db/client";
import { FalAiModel } from "models/FalAiModel";
import { NextRequest, NextResponse } from "next/server";

const falAiModel = new FalAiModel();

export async function POST(req: NextRequest) {
    const parsedBody = generateImageFromPack.safeParse(await req.json())
    const {userId} = await auth()
    if (!parsedBody.success || !userId) {
        return NextResponse.json({
                message: "Incorrect Inputs"
            },{
                status: 411
            }
        )
    }
    const {modelId, packId} = parsedBody.data;

    const model = await PrismaClient.model.findUnique({
        where: {
            id: modelId
        }
    })

    const packPrompts = await PrismaClient.packPrompts.findMany({
        where: {
            packId
        }
    })

    if (!model || !model.tensorPath || !packPrompts || packPrompts.length == 0) {
        return NextResponse.json({
                message: "Incorrect Inputs"
            },{
                status: 411
        })
    }


    const falAiModel = new FalAiModel();

    const results = await Promise.all(packPrompts.map(async (packPrompt) => {
        const prompt = packPrompt.prompt
        const {request_id, response_url} = await falAiModel.generateImage(prompt,model.tensorPath!, 1)
    
        return PrismaClient.outputImages.create({
            data: {
                userId, 
                prompt, 
                modelId, 
                falAiRequestId: request_id
            }
        })
    }))

    return NextResponse.json({ success: true });
}