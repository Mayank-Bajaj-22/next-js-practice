export default async function username({ params }) {

    const { username } = await params;
    console.log(username)

    return (
        <div>
            Hey, This is { username } Page.
        </div>
    )
}
