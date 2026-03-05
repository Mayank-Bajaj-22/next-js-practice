import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// fronted se file aati hai jo uska type hota hai Blob - binary large object

const uploadOnCloudinary = async (file: Blob | null): Promise<string | null> => {
    if (!file) {
        return null
    }
    try {
        const arrayBuffer = await file?.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        // Blob
        // ↓
        // ArrayBuffer
        // ↓
        // Buffer
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream({
                resource_type: "auto",
            }, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result?.secure_url ?? null)
                }
            })

            uploadStream.end(buffer)
        })
    } catch (error) {
        return null
    }
}

export default uploadOnCloudinary

// Frontend
//    ↓
// User selects image
//    ↓
// File (Blob)
//    ↓
// API Route
//    ↓
// Blob → ArrayBuffer
//    ↓
// ArrayBuffer → Buffer
//    ↓
// Cloudinary Upload Stream
//    ↓
// Cloudinary Storage
//    ↓
// Return Image URL
//    ↓
// Save URL in Database