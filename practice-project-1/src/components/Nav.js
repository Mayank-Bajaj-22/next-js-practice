"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {

    const pathname = usePathname()
    console.log(pathname)

    return (
        <div className="w-full h-20 bg-white flex justify-between items-center px-5 fixed top-0">
            <div className="text-black font-bold text-2xl">
                🌍Travel Guide
            </div>

            <div className="font-md">
                <ul className="flex justify-center items-center gap-2.5">
                    <Link href={"/"} className={ pathname=="/" ? "text-blue-600": "" }>  
                        <li>
                            Home
                        </li>
                    </Link>

                    <Link href={"/destinations"} className={ pathname=="/destinations" ? "text-blue-600": "" }>  
                        <li>
                            Destinations
                        </li>
                    </Link>

                    <Link href={"/contact"} className={ pathname=="/contact" ? "text-blue-600": "" }>  
                        <li>
                            Contact Us
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

