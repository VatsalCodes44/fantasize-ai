import {trainModel} from "@repo/common/types"
import {NextRequest , NextResponse} from "next/server";
import prismaClient from "@repo/db/client"
import {z} from "zod"
import { FalAiModel } from "models/FalAiModel";
import { currentUser, auth } from '@clerk/nextjs/server'


export async function POST(req: NextRequest) {
    const body = await req.json()
    const parsedBody = trainModel.safeParse(body);

    const { userId } = await auth()
    if (!userId) {
        return new NextResponse('Unauthorized', { status: 401 })
    }
    console.log(body)

    if (!parsedBody.success) {
        console.log(parsedBody.error)
        return NextResponse.json({
            message: "Incorrect Inputs"
        }, {
            status: 411
        })
    }
    
    const {name, type, age, ethinicity, bald, eyeColor, key, createdAt, updatedAt} = parsedBody.data
    const zipUrl = `https://${process.env.bucket}.s3.amazonaws.com/${key}.zip`

    // const falAiModel = new FalAiModel();
    // const {request_id, response_url} = await falAiModel.trainModel("",name)
    console.log({
        name, type, age, ethinicity, bald, eyeColor, zipUrl, createdAt, updatedAt, userId,
        // falAiRequestId: request_id
    })
    const model = await prismaClient.model.create({
        data: {
            name, type, age, ethinicity, bald: bald == "true" ? true : false, eyeColor, zipUrl, createdAt, updatedAt, userId,
            // falAiRequestId: request_id
        }
    })

    return NextResponse.json({
        message: "model created"
    })
}