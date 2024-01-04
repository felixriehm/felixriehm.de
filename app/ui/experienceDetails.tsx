import ExperienceSummary from "@/app/ui/experienceSummary";

export default function ExperienceDetails({experience, isDevPage} : {experience: WebpageContent.Experience, isDevPage: boolean}) {
    const descriptions = experience.descriptions.map((description, index) =>
        <dl key={index}>
            <dt className={'font-medium'}>{description.title}</dt>
            <dd>{description.details}</dd>
        </dl>
    );

    const images = experience.images.map((image, index) =>
        <li key={index} className={'cursor-pointer'}>
            <img data-original={image.src} src={image.thumbnail} alt={image.alt} className={`max-w-[150px] max-h-[150px] ${!isDevPage ? 'rounded-md' : ''}`}></img>
        </li>
    );

    const videos = experience.videos.map((video, index) =>
        <li key={index}>
            <iframe width="256" height="144" src={video.src}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </li>
    );

    const links = experience.links.map((link, index) =>
        <a key={index} href={link.href} target={'_blank'} className={'group/experience-link p-2'}>
            <div className={'font-medium text-felixriehm-link relative pb-1 ' +
                'after:absolute after:content-[""] after:left-0 after:-bottom-0 after:h-0.5 after:bg-felixriehm-link ' +
                'after:w-0 group-hover/experience-link:after:w-2/3 after:transition-width after:duration-150 after:ease-out-apple'}>
                {link.title} <span className={`${!isDevPage ? 'font-felixriehm-icon-round' : 'font-felixriehm-icon-sharp'} font-medium align-top relative top-[1px]`}>arrow_forward</span>
            </div>
        </a>
    );

    return (
        <details className={'group/experience-details'}>
            <ExperienceSummary experience={experience} isDevPage={isDevPage}></ExperienceSummary>
            <div
                className={`group-open/experience-details:animate-fadeInAndSlideRight-1-0 flex flex-col mt-10 md:ml-[200px] opacity-0 gap-6`}>
                {descriptions}

                {experience.images.length === 0 ? null : (
                    <div>
                        <div className={'font-medium pb-1'}>Images:</div>
                        <ul className={`experience-gallery flex flex-wrap justify-center gap-3 list-none ${!isDevPage ? 'rounded-md' : ''} p-3 border-solid border-felixriehm-grey-150 border-[1px] bg-felixriehm-grey-100`}>
                            {images}
                        </ul>
                    </div>
                )}

                {experience.videos.length === 0 ? null : (
                    <div>
                        <div className={'font-medium pb-1'}>Videos:</div>
                        <ul className={`flex flex-wrap justify-center gap-3 list-none ${!isDevPage ? 'rounded-md' : ''} p-3 border-solid border-felixriehm-grey-150 border-[1px] bg-felixriehm-grey-100`}>
                            {videos}
                        </ul>
                    </div>
                )}

                {experience.about.length === 0 ? null : (
                    <div>
                        <div className={'font-medium'}>About:</div>
                        <p className={'leading-relaxed'} dangerouslySetInnerHTML={{__html: experience.about}}>

                        </p>
                    </div>
                )}

                {links.length === 0 ? null : (
                    <div className={'flex gap-7'}>
                        {links}
                    </div>
                )}

                <div className={`h-[1px] self-end w-1/3 ${!isDevPage ? 'bg-felixriehm-green-400' : 'bg-felixriehm-blue-400'} mb-5`}></div>
            </div>
        </details>
    )
}