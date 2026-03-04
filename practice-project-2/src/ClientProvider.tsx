"use client"

import { clear } from "console"
import { SessionProvider } from "next-auth/react"

export default function ClientProvider({ children } : { children: React.ReactNode }) {
    return (
        <div>
            <SessionProvider>
                { children }
            </SessionProvider>
        </div>
    )
}