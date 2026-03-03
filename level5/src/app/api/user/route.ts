import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    return NextResponse.json({
        name: "mayank",
        age: 20
    })
}

export async function POST(req: NextRequest) {
    const user = await req.json()
    return NextResponse.json({
        user
    })
}