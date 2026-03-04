import { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface Session {
        // M - 1
        // user: {
        //     id: string
        //     name: string | null | undefined,
        //     email: string | null | undefined,
        //     image: string |null | undefined
        // }

        // M - 2
        user: {
            id: string
        } & DefaultSession['user']
    }
}

export {}