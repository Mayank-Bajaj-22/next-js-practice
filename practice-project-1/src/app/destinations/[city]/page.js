"use client"

import { useParams } from "next/navigation"
import parisImg from "@/assets/paris.jpg"
import tokyoImg from "@/assets/tokyo.jpeg"
import nyImg from "@/assets/ny.jpg"
import Image from "next/image"

export default function page() {
    const { city } = useParams()
    return (
        <div className="text-white mt-25 w-[50%] p-5 gap-3 flex flex-col bg-[#22222255]">
            {city} is the beautiful city

            {
                city=="Paris" &&  <Image src={parisImg} width={400} height={400} alt='paris img'/>
            }
            {
                city=="Tokyo" &&  <Image src={tokyoImg} width={400} height={400} alt='tokyo img'/>
            }
            {
                city=="NewYork" &&  <Image src={nyImg} width={400} height={400} alt='ny img'/>
            }
        </div>
    )
}
