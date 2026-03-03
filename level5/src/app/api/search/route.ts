import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    let query = req.nextUrl.searchParams.get("q");
    return NextResponse.json({
        query
    })
}