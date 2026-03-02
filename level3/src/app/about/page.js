import Image from "next/image";

export default function page() {
    return (
        <div className="flex flex-col h-screen w-screen items-center gap-2 p-4">
            About Page

            <Image src={"https://images.unsplash.com/photo-1546521677-b3a9b11bee6f?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={400} height={400} alt="vercel" />
        </div>
    )
}
