export default function ExperienceFloatingTitle({title, topLabel, isDevPage} : {title: string, topLabel: string, isDevPage: boolean}) {
    return (
        <div>
            <div
                className={'transition-padding-left duration-500 ease-out-apple group-open/experience-details:pl-0 pl-[12%] absolute left-0 right-0 bottom-[-20px] md:hidden'}>
                <div
                    className={`group-open/experience-details:h-full font-medium px-3 py-2 flex flex-col justify-center ${!isDevPage ? 'rounded-[12px] bg-[url("../public/images/papyrus.png")]' : 'bg-[url("../public/images/struckaxiom.png")]'} text-felixriehm-white`}>
                    <div
                        className={'group-open/experience-details:hidden text-xs truncate opacity-100'}>{topLabel}
                    </div>
                    <div
                        className={'group-open/experience-details:whitespace-normal group-open/experience-details:line-clamp-4 text-xl truncate shrink-0'}>{title}
                    </div>
                </div>
            </div>
            <div
                className={`min-w-[240px] md:group-open/experience-details:animate-fadeInAndSlideRight-05-0 md:group-open/experience-details:opacity-100 font-medium absolute px-5 py-3 left-[40px] ${!isDevPage ? 'rounded-xl bg-[url("../public/images/papyrus.png")]' : 'bg-[url("../public/images/struckaxiom.png")]'} w-fit h-fit bottom-5 text-felixriehm-white text-2xl opacity-0 mr-[100px] line-clamp-3`}>
                {title}
            </div>
        </div>
    )
}