export default function ExperienceExpandButton({isDevPage}:{isDevPage: boolean}) {
    return (
        <div
            className={`group-hover/experience-summary:scale-[1.14] transition-transform ease-out-apple duration-150 h-[48px] w-[48px] ${!isDevPage ? 'bg-felixriehm-green-400 rounded-[50%]' : 'bg-felixriehm-blue-400'} self-end md:self-center shrink-0 flex justify-center items-center`}>
            <span
                className={`group-open/experience-details:hidden ${!isDevPage ? 'font-felixriehm-icon-round' : 'font-felixriehm-icon-sharp'} text-4xl text-felixriehm-white relative top-0.5`}>expand_more</span>
            <span
                className={`group-open/experience-details:inline-block ${!isDevPage ? 'font-felixriehm-icon-round' : 'font-felixriehm-icon-sharp'} text-4xl text-felixriehm-white relative top-0.5 hidden`}>expand_less</span>
        </div>
    )
}