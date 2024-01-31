export default function DoButton ({children, onClick, className}) {

    return (
        <button className={className} onClick={onClick}>{children}</button>
    )
}