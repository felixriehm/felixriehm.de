export default function Heading2({title, inverted} : {title: string, inverted: boolean}) {
    return (
        <h2 className={`text-4xl ${inverted ? 'text-felixriehm-white' : ''} lg:ml-6`}>{title}</h2>
    )
}