import { NextRequest, NextResponse } from "next/server";
import PrismaClient from "@repo/db/client";

const userId = "asdasd";
export async function GET(req: NextRequest) {
    const imagesId = req.nextUrl.searchParams.get("images");
    const limit = req.nextUrl.searchParams.get("limit") || "10"
    const offset = req.nextUrl.searchParams.get("offset") || "0"
    if (!imagesId) {
        return NextResponse.json({
                message: "Incorrect Inputs"
            },{
                status: 411
            }
        )
    }
    const images = imagesId.split(",")

    const imagesData = await PrismaClient.outputImages.findMany({
        where: {
            userId,
            imageUrl: {in: images}
        },
        skip: parseInt(offset),
        take: parseInt(limit)
    })

    return NextResponse.json({
        message: imagesData
    })
}