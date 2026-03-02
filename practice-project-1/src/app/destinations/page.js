"use client"

import { useRouter } from "next/navigation";

export default function page() {
    const destination = ["Paris", "Tokyo", "NewYork"];
    const router = useRouter();
    return (
        <div className="flex justify-center items-center text-white h-full flex-col gap-8">
            <div className="font-bold text-2xl">Choose Your Destination</div>
                <div className="flex flex-col gap-4">
                    {destination.map((d, index) => (
                    <div
                        key={index}
                        className=" font-bold text-2xl flex items-center justify-center rounded-2xl w-50 h-25 text-black bg-white hover:opacity-[0.5] transition-all"
                        onClick={() => router.push(`/destinations/${d}`)}
                    >
                        {d}
                    </div>
                ))}
            </div>
        </div>
    );
}
