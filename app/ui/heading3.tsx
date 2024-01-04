export default function Heading3({title, truncate} : {title: string, truncate: boolean}) {
    return (
        <h3 className={`text-2xl font-medium ${truncate ? 'truncate' : ''}`}>{title}</h3>
    )
}