"use client"

import { userDataContext } from "@/context/UserContext";
import axios from "axios";
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useContext, useEffect, useRef, useState } from "react";
import { CgProfile } from "react-icons/cg";

export default function Edit() {

    // const { data } = useSession()
    const data = useContext(userDataContext)
    const [name, setName] = useState("")
    const [loading, setLoading]=useState(false)
    const [frontendImage, setFrontendImage]=useState("")
    const [backendImage, setBackendImage]=useState<File>()
    const imageInput = useRef<HTMLInputElement>(null)

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (!files || files.length == 0) return
        const file = files[0]
        setBackendImage(file)
        setFrontendImage(URL.createObjectURL(file))
    }

    const handleEdit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
            const formData = new FormData()
            formData.append("name", name)

            if (backendImage) {
                formData.append("file", backendImage)
            }
            const result = await axios.post('/api/edit',formData)
            setLoading(false)
            data?.setUser(result.data)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (data) {
            setName(data?.user?.name as string)
            setFrontendImage(data.user?.image as string)
        }
    }, [data])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
            <div className="w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg">
                <h1 className="text-2xl font-semibold text-center mb-2">
                    Edit Profile
                </h1>

                <form className="space-y-2 flex flex-col w-full items-center" onSubmit={handleEdit}>
                    <div className="w-25 h-25 rounded-full border-2 flex justify-center items-center border-white transition-all hover:border-blue-500 text-white hover:text-blue-500 cursor-pointer overflow-hidden relative" onClick={() => imageInput.current?.click()}>
                        <input type="file" accept="image/*" hidden ref={imageInput} onChange={handleImage} />
                        {
                            frontendImage ? <Image src={frontendImage} fill alt="image" /> : <CgProfile size={22} color='white' />
                        }
                    </div>

                    <div className="w-full">
                        <label className="block mb-1 font-medium">Name</label>

                        <input
                            type="text"
                            placeholder='Enter Name'
                            className='w-full border-b border-white py-2 px-1 bg-black text-white outline-none placeholder-gray-400'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </div>

                    <button className="w-full py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors mt-4" disabled={loading}>
                        { loading ? "Saving..." : "Save" }
                    </button>
                </form>
            </div>
        </div>
    )
}

// useRef - useRef ek container (box) jaisa hota hai jisme aap koi value store kar sakte ho.
    // - Value component ke re-render ke beech survive karti hai
    // - Lekin value change hone par component re-render nahi hota
    // Mutable = change ho sakti hai.