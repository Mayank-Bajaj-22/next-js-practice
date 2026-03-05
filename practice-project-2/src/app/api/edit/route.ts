import uploadOnCloudinary from "@/lib/cloudinary";
import connectDB from "@/lib/db";
import User from "@/model/user.model";
import { stat } from "fs";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const session = await getServerSession() // frontend wale session ko iss tarah hum bakend me access akrte hai just this one line
        if (!session || !session.user.email || !session.user.id) {
            return NextResponse.json(
                {
                    message: "user does not have session"
                },
                {
                    status: 400
                }
            )
        }

        // image ko hum formdata ke form me bhejte ya base 64
        const formData = req.formData()
        const name = (await formData).get("name") as string
        const file = (await formData).get("file") as Blob | null

        let imageUrl = session.user.image ?? null
        if (!file) {
            imageUrl = await uploadOnCloudinary(file)
        }

        const user = await User.findByIdAndUpdate(session.user.id, {
            name, image: imageUrl
        }, { new: true })

        if (!user) {
            return NextResponse.json(
                {
                    message: "user not found"
                },
                {
                    status: 400
                }
            )
        }

        return NextResponse.json(
            user,
            {
                status: 200
            }
        )
    } catch (error) {
        return NextResponse.json(
            {
                message: `edit error ${error}`
            },
            {
                status: 500
            }
        )
    }
}