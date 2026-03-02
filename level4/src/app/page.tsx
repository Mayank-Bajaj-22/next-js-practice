"use client"

import Button from "@/Button";
import { useRef, useState } from "react";

export default function Home() {

  // const [count, setCount] = useState<number>(0)
  // const inputRef = useRef<HTMLInputElement>(null)

  const input = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  function fn () {

  }

  return (
    <div>
      {/* <Button data="mayank" action={fn} /> */}

      <form action="" onSubmit={handleSubmit}>
        <input type="text" ref={input}>

        </input>

        <button onClick={handleClick}>
          Click
        </button>
      </form>
    </div>
  );
}
