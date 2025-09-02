
import PrismaClient from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";


export async function POST (req: NextRequest) {
    const body = await req.json();
    if (!body || !body.request_id || !body.tensor_path) {
        return NextResponse.json({
                message: "Incorrect Inputs"
            },{
                status: 411
            }
        )
    }
    const request_id: string = body.request_id;
    const tensor_path: string = body.tensor_path;
    await PrismaClient.model.updateMany({
        where: {
            falAiRequestId: request_id,
        },
        data: {
            trainingStatus: "generated",
            tensorPath: tensor_path
        }
    })
}