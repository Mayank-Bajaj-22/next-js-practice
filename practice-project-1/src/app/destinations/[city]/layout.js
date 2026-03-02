export default function({ children, info }) {
    return (
        <div className="flex gap-4">
            { children }
            { info }
        </div>
    )
}

