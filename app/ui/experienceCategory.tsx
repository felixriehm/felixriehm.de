import Heading2 from "@/app/ui/heading2";
import ExperienceDetails from "@/app/ui/experienceDetails";
import Divider from "@/app/ui/divider";

export default function ExperienceCategory({experienceCategory, isDevPage} : {experienceCategory: WebpageContent.ExperienceCategory, isDevPage: boolean}) {

    const experiences = experienceCategory.experiences.map((experience, index) =>
        <ExperienceDetails key={index} experience={experience} isDevPage={isDevPage}></ExperienceDetails>
    );

    return (
        <section>
            <Heading2 title={experienceCategory.title} inverted={false}></Heading2>
            <Divider inverted={false} isDevPage={isDevPage}></Divider>
            <div className={'lg:ml-6 flex flex-col gap-[72px] md:gap-[52px] mb-[72px] md:mb-[52px]'}>
                {experiences}
            </div>
        </section>
    )
}