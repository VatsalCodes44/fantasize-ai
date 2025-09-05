import {trainModel} from "@repo/common/types"
import {NextRequest , NextResponse} from "next/server";
import prismaClient from "@repo/db/client"
import { FalAiModel } from "models/FalAiModel";
import { auth } from '@clerk/nextjs/server'
import { fal } from "@fal-ai/client";


export async function POST(req: NextRequest) {
    try {
        const { userId } = await auth()
        if (!userId) {
            return NextResponse.json({message:'Unauthorized'}, { status: 401 })
        }
        const body = await req.json()
        const parsedBody = trainModel.safeParse(body);

        console.log(body)

        if (!parsedBody.success) {
            console.log(parsedBody.error)
            return NextResponse.json({
                message: "Incorrect Inputs"
            }, {
                status: 411
            })
        }
        try {
        // Try to call a simple model (no webhook)
            const result = await fal.queue.submit("fal-ai/flux-lora", {
                input: { prompt: "a test image of a sunset" },
                });

                console.log("Fal key works ✅");
                console.log("Request ID:", result.request_id);
                console.log("Response URL:", result.response_url);

            } catch (error) {
                console.error("Fal key test failed ❌");
                console.error(error);
        }
        const {name, type, age, ethinicity, bald, eyeColor, key, createdAt, updatedAt} = parsedBody.data
        const zipUrl = `https://${process.env.bucket}.s3.amazonaws.com/${key}`

        // const falAiModel = new FalAiModel();
        // const {request_id, response_url} = await falAiModel.trainModel(zipUrl)
        console.log("--------------------------------------------------------------------------------")
        console.log("route.ts",{
            name, type, age, ethinicity, bald, eyeColor, zipUrl, createdAt, updatedAt, userId,
            // falAiRequestId: request_id,
            // response_url
        })
        console.log("--------------------------------------------------------------------------------")
        const model = await prismaClient.model.create({
            data: {
                name, type, age, ethinicity, bald: bald == "true" ? true : false, eyeColor, zipUrl, createdAt, updatedAt, userId,
                // falAiRequestId: request_id
            }
        })
    }  catch (error: any) {
        console.error("Fal training failed ❌");
        if (error.body) {
            console.error("Fal error body:", JSON.stringify(error.body, null, 2));
        } else {
            console.error(error);
        }
    }
    return NextResponse.json({
        message: "model created"
    })
}