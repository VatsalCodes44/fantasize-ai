import { NextRequest, NextResponse } from "next/server";
import PrismaClient from "@repo/db/client";

export async function GET(req: NextRequest) {
    
    const packs = await PrismaClient.packs.findMany({})

    return NextResponse.json({
        packs
    })

}