export default async function blogId({ params }) {
    const { blogId } = await params
    console.log(blogId)
    return (
        <div>
            Hey, This is blogId Page - { blogId }
        </div>
    )
}
