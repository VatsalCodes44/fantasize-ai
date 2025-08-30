import {trainModel} from "@repo/common/types"
import {NextRequest , NextResponse} from "next/server";
import prismaClient from "@repo/db/client"
import {z} from "zod"
import { FalAiModel } from "models/FalAiModel";

const userId = "asdasd";

export async function POST(req: NextRequest) {
    const parsedBody = trainModel.safeParse(await req.json());
    
    if (!parsedBody.success) {
        return NextResponse.json({
            message: "Incorrect Inputs"
        }, {
            status: 411
        })
    }
    
    const {name, type, age, ethinicity, blad, eyeColor, zipUrl, createdAt, updatedAt} = parsedBody.data
    
    const falAiModel = new FalAiModel();
    const {request_id, response_url} = await falAiModel.trainModel("",name)

    const model = await prismaClient.model.create({
        data: {
            name, type, age, ethinicity, blad, eyeColor, zipUrl, createdAt, updatedAt, userId,falAiRequestId: request_id
        }
    })
}