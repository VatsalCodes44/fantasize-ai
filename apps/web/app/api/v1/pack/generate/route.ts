import { generateImageFromPack } from "@repo/common/types";
import PrismaClient from "@repo/db/client";
import { FalAiModel } from "models/FalAiModel";
import { NextRequest, NextResponse } from "next/server";

const userId = "asdasd"
export async function POST(req: NextRequest) {
    const parsedBody = generateImageFromPack.safeParse(await req.json())

    if (!parsedBody.success){
        return NextResponse.json({
                message: "Incorrect Inputs"
            },{
                status: 411
            }
        )
    }

    const prompts = await PrismaClient.packPrompts.findMany({
        where: {
            packId: parsedBody.data.packId
        }
    })

    
    const falAiModel = new FalAiModel()
    
    let requestIds: {
        request_id: string,

    }[] =  await Promise.all(prompts.map(async prompt => {
        return falAiModel.generateImage(prompt.prompt, parsedBody.data.modelId,1)
    }))

    const images = PrismaClient.outputImages.createManyAndReturn({
        data: prompts.map((prompt, index) => ({
            prompt: prompt.prompt,
            userId,
            modelId: parsedBody.data.modelId,
            falAiRequestId: requestIds[index]?.request_id
        }))
    })

    return NextResponse.json({
        images
    })
}