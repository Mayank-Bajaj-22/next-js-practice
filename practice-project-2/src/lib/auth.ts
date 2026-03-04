import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./db";
import User from "@/model/user.model";
import bcrypt from "bcryptjs";
import Google from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
    providers: [
        // login kaise karoge
        Credentials({
            name: "Credentials",
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(credentials, req) {
                const email = credentials?.email
                const password = credentials?.password

                if(!email || !password){
                    throw new Error("email or password not found")
                }

                await connectDB()

                const user = await User.findOne({ email })
                if(!user){
                    throw new Error("user not found")
                }

                const isMatch = await bcrypt.compare(password, user.password)
                if(!isMatch){
                    throw new Error("incorrect Password")
                }

                return {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    image: user.image
                }
            }
        }),

        Google({
            clientId: process.env.CLIENT_ID!,
            clientSecret: process.env.CLIENT_SECRET!
        })
    ],
    callbacks: {

        async signIn({ account, user }) {
            if (account?.provider === "google") {
                await connectDB();

                let existUser = await User.findOne({ email: user?.email })
                if (!existUser) {
                    existUser = await User.create({
                        name: user.name,
                        email: user?.email
                    })
                }
                user.id = existUser._id as string
            }
            return true
        },
        // jwt yeh karta hai jo upar likha usko token me return karta hai or vo cookies me store hota hai - abhi tak usme created at or expiry time likha hai ab hum kuch logic likhenge jiski awajah se user ki kuch or info add karenge token me
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id,
                token.name = user.name,
                token.email = user.email,
                token.image = user.image
            }
            return token
        },

        // session ke andar user details dalenge
        session({ session, token }) { // yeh session Session type ka hai jisme name, email, image hai toh hum isme id dalenge additionally
            if (session.user) {
                session.user.id = token.id as string
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.image as string
            }
            return session
        }
    },
    session: {
        strategy: "jwt",
        maxAge: 30*24*60*60
    },
    pages: {
        signIn: "/login",
        error: "/login"
    },
    secret: process.env.NEXT_AUTH_SECRET
}

export default authOptions;

// sign in
// token generate
// token ke andar user details daal di
// session ke andar user ki detail daalni hai from token

// next-auth - signIn and signOut karega baas