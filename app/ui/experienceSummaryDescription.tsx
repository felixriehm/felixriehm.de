import Heading3 from "@/app/ui/heading3";

export default function ExperienceSummaryDescription({descriptions, title}: {descriptions: WebpageContent.Description[], title: string}) {
    let description1 = descriptions[0]
    let description2 = descriptions[1]
    let description3 = descriptions[2]

    let titleWithoutWhiteSpace = title.replace(/\s/g, "")
    let titleRepeat = []

    for (let i = 0; i < 120; i++) {
        if(i % 3 === 0 && i !== 0) {
            titleRepeat.push(<span className={'font-medium'}>{titleWithoutWhiteSpace}</span>)
        } else {
            titleRepeat.push(<span>{titleWithoutWhiteSpace}</span>)
        }
    }

    return (
        <div className={'hidden md:block w-full md:pl-7 lg:pl-10 pt-3 relative'}>
            <div
                className={'transition-opacity duration-500 ease-out-apple md:group-open/experience-details:opacity-0 opacity-1 overflow-hidden'}>
                <div className={'text-xs lg:hidden truncate'}>{description2?.details}</div>
                <Heading3 title={title} truncate></Heading3>
                <div className={'flex mt-5 gap-[28px]'}>
                    <dl className={''}>
                        <dt className={'font-medium'}>{description1?.title}</dt>
                        <dd className={'line-clamp-3 lg:line-clamp-4'}>{description1?.details}</dd>
                    </dl>
                    <dl className={'hidden lg:block w-[25%] shrink-0'}>
                        <dt className={'font-medium'}>{description2?.title}</dt>
                        <dd className={'line-clamp-3 lg:line-clamp-4'}>{description2?.details}</dd>
                    </dl>
                    <dl className={'w-[40%] lg:w-[25%] shrink-0'}>
                        <dt className={'font-medium'}>{description3?.title}</dt>
                        <dd className={'line-clamp-3 lg:line-clamp-4'}>{description3?.details}</dd>
                    </dl>
                </div>
            </div>
            <div className={'absolute md:pl-7 lg:pl-10 pt-3 left-0 right-0 top-0 flex flex-wrap h-[182px] opacity-0 transition-opacity duration-500 ease-out-apple md:group-open/experience-details:opacity-[0.24] overflow-hidden'}>
                {titleRepeat}
            </div>
        </div>
    )
}