import Image from "next/image";

export default async function Home() {

  // SSR
  // const result = await fetch("http://localhost:3000/api/user", {
  //   cache: "no-store" // means cache me koi data store nhi karenge har baar api call pe naya data aayega - it means it is SSR
  // })
  // let data = await result.json()
  // console.log(data)

  // SSG
  // const result = await fetch("http://localhost:3000/api/user", {
  //   cache: "force-cache" // ek baar api call hoga phir chaiye api me kitna bhi changes karlo vo ek baar hi cache me store hoga or again and again cache se hi data dega
  // })
  // let data = await result.json()
  // console.log(data)

  // ISR
  const result = await fetch("http://localhost:3000/api/user", {
    next: {
      revalidate: 10 // 10 sec ke baad background me change
    }
  })
  let data = await result.json()
  console.log(data)
  
  return (
    <div>
      Home
    </div>
  );
}

// ssr, ssg, isr - only work in server components - isme complete url likhte hai fetch ke time
// csr - only in client components - do not need to write complete url