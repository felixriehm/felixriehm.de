"use client"

import {useSearchParams} from "next/navigation";
import Heading2 from "@/app/ui/heading2";
import Divider from "@/app/ui/divider";
import contentJson from "@/public/content.json";
import contentJsonDev from "@/public/content_dev.json";

export default function Footer() {
    const searchParams = useSearchParams()

    const devParameter = searchParams.get('dev')
    let isDevPage = devParameter === ""

    let data: WebpageContent.WebpageContent;

    if(isDevPage){
        data = contentJsonDev
    } else {
        data = contentJson
    }

    const animationFadeIn = new Map([
        [0, "data-[is-inviewport]:animate-fadeInAndSlideRight-05-0"],
        [1, "data-[is-inviewport]:animate-fadeInAndSlideRight-05-1"],
        [2, "data-[is-inviewport]:animate-fadeInAndSlideRight-05-2"],
    ]);
    const animationFadeOInReverse = new Map([
        [0, 'data-[check-inviewport]:animate-fadeInAndSlideRight-05-0-reverse'],
        [1, 'data-[check-inviewport]:animate-fadeInAndSlideRight-05-1-reverse'],
        [2, 'data-[check-inviewport]:animate-fadeInAndSlideRight-05-2-reverse'],
    ]);
    let itemsInRow = 1;
    if (window.matchMedia('(min-width: 640px)').matches) {
        itemsInRow = 2;
    }
    if (window.matchMedia('(min-width: 768px)').matches) {
        itemsInRow = 3;
    }


    let friendsImagesElements = data.friendsImages.map((friendImage, index) =>
        <div key={index} data-check-inviewport="" className={`opacity-0 w-full sm:w-1/2 md:w-1/3 flex justify-center mb-7 ${animationFadeOInReverse.get(index%itemsInRow)} ${animationFadeIn.get(index%itemsInRow)}`}>
            <img src={friendImage.src} alt={friendImage.alt} className={'max-h-[100px] object-contain'}></img>
        </div>
    )

    return (
        <footer className={`${!isDevPage ? 'bg-[url("../public/images/ignasi_pattern_s.png")]': 'bg-[url("../public/images/ignasi_pattern_s_dev.png")]'} w-full`}>
            <div className={'flex justify-center sm:px-5 pb-5'}>
                <div className={'py-10 px-5 sm:px-10 w-full max-w-screen-xl'}>
                    <Heading2 title={'Friends'} inverted></Heading2>
                    <Divider inverted isDevPage={isDevPage}></Divider>
                    <div className={'flex justify-center flex-wrap'}>
                        {friendsImagesElements}
                    </div>
                </div>
            </div>
        </footer>
    )
}