import ExperienceExpandButton from "@/app/ui/experienceExpandButton";
import ExperienceFloatingTitle from "@/app/ui/experienceFloatingTitle";
import ExperienceSummaryDescription from "@/app/ui/experienceSummaryDescription";

export default function ExperienceSummary({experience, isDevPage} : {experience: WebpageContent.Experience, isDevPage: boolean}) {
    let description2 = experience.descriptions[1]

    return (
        <summary data-check-inviewport="" className={'opacity-0 pointer-events-none flex relative group/experience-summary data-[check-inviewport]:animate-fadeInAndSlideRight-05-0-reverse data-[is-inviewport]:animate-fadeInAndSlideRight-05-0 data-[is-inviewport]:cursor-pointer data-[is-inviewport]:pointer-events-auto'}>
            <img src={experience.heroImage} alt={`hero image ${experience.title}`}
                 className={`transition-left duration-500 ease-out-apple group-open/experience-details:left-[33%] md:group-open/experience-details:left-[100px] h-[140px] w-[140px] sm:h-[160px] sm:w-[160px] md:h-[200px] md:w-[200px] shrink-0 ${!isDevPage ? 'rounded-[20px]' : ''} relative left-[70px] sm:left-[80px] md:left-[100px] translate-x-[-50%] md:transition-none object-cover`}></img>
            <div className={'flex gap-[28px] w-full'}>
                <div className={'grid w-full overflow-hidden'}>
                    <ExperienceSummaryDescription title={experience.title}
                                                  descriptions={experience.descriptions}></ExperienceSummaryDescription>
                </div>
                <div className={'self-start md:self-center'}>
                    <ExperienceExpandButton isDevPage={isDevPage}></ExperienceExpandButton>
                </div>
            </div>

            <ExperienceFloatingTitle title={experience.title}
                                     topLabel={description2?.details ?? ""} isDevPage={isDevPage}></ExperienceFloatingTitle>
        </summary>
    )
}