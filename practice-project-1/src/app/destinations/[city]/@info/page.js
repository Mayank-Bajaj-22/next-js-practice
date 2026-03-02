"use client"

import { useParams } from "next/navigation"

export default function page({ params }) {

    const { city } = useParams();

    return (
        <div className="text-white mt-25 w-[50%] bg-[#22222255] p-5">
            { city } is the best city.
        </div>
    )
}
