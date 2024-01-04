export default function Divider({inverted, isDevPage}:{inverted:boolean, isDevPage: boolean}) {
    let dividerColor = !isDevPage ? 'bg-felixriehm-green-400' : 'bg-felixriehm-blue-400'
    return (
        <div className={`w-2/3 h-0.5 ${inverted ? 'bg-felixriehm-white' : dividerColor} mb-14 mt-5`}></div>
    )
}