"use client"

import { useEffect } from "react"

export default function Blog() {

    const handleApi = async () => {
        let response = await fetch("/api/user")
        let data = await response.json()
        console.log(data)
    }

    useEffect(() => {
        handleApi()
    }, [])

    return (
        <div>
            Blog Page
        </div>
    )
}

// client side me hum async await use nhi kar sakte as a main function like blog page me nhi use kar sakte