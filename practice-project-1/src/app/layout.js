import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Travel Guide Website",
  description: "Best Travel Guidance",
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: "swap"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} w-screen h-screen bg-black`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
