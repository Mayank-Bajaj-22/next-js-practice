export default async function blogId1({ params }) {
    const { blogId1 } = await params
    console.log(blogId1)
    return (
        <div>
            Hey, This is blogId Page - { blogId1 }
        </div>
    )
}
