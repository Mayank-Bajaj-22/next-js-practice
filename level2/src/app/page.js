"use client"

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("mayank")
  return (
    <>
      Hello, This is Home Page. { name }
    </>
  );
}
