import { NextRequest, NextResponse } from "next/server";
import PrismaClient from "@repo/db/client";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest) {
    const {userId} = await auth()
    const limit = req.nextUrl.searchParams.get("limit") || "10"
    const offset = req.nextUrl.searchParams.get("offset") || "0"
    if (!userId) {
        redirect("/sign-in")
    }
    const imagesData = await PrismaClient.outputImages.findMany({
        where: {
            userId,
            status: "generated"
        },
        orderBy: { createdAt: "desc" },
        skip: parseInt(offset),
        take: parseInt(limit),
        select: {
            imageUrl: true,
            createdAt: true
        }
    })

    return NextResponse.json({
        images: imagesData
    })
}