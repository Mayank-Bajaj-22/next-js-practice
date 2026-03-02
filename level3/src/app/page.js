"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div className="flex flex-col gap-5">
      <ul className="flex items-center justify-center gap-10 p-3 bg-[#222222AF]">
        <Link href={"/"}>
          <li>
            Home
          </li>
        </Link>

        <Link href={"/about"}>
          <li>
            About
          </li>
        </Link>

        <Link href={"/contact"}>
          <li>
            Contact
          </li>
        </Link>
      </ul>

      <button onClick={() => router.push("/about")}>
        Go To About
      </button>
    </div>
  );
}
