"use client"

import {useSearchParams} from "next/navigation";
import MetaData from "@/app/ui/metaData";
import contentJson from "@/public/content.json";
import contentJsonDev from "@/public/content_dev.json";
import ExperienceCategory from "@/app/ui/experienceCategory";
import {useEffect} from "react";
import Viewer from 'viewerjs';
import heroImage from "@/public/images/logo.svg";

function initImageGallery(){
    var galleries= document.querySelectorAll<HTMLElement>('.experience-gallery');
    for (let i = 0; i < galleries.length; i++) {
        new Viewer(galleries[i], {
            url: 'data-original',
            movable: false,
            rotatable: false,
            scalable: false,
            title: false,
            toggleOnDblclick: false,
            tooltip: false,
            zoomable: false,
            zoomOnTouch: false,
            zoomOnWheel: false
        });
    }
}

function initIntersectionObserver(){
    const inViewport = (entries: any, observer: any) => {
        entries.forEach((entry: any) => {

            if(entry.boundingClientRect.top+document.documentElement.scrollTop <= document.documentElement.scrollTop) {
                // when the page is reloaded and the target animation element is above browser view
                entry.target.setAttribute('data-is-inviewport', '')
            }

            if(entry.intersectionRatio === 1.0) {
                // normal case if you scroll down
                entry.target.setAttribute('data-is-inviewport', '')
            }

            if(entry.intersectionRatio < 1.0 && entry.boundingClientRect.height +
                entry.boundingClientRect.top+document.documentElement.scrollTop > document.documentElement.scrollTop + entry.rootBounds.height){
                // scrolling up
                entry.target.removeAttribute('data-is-inviewport')
                if(entry.target.parentElement.tagName === "DETAILS") {
                    entry.target.parentElement.removeAttribute('open')
                }
            }
        });
    };

    function buildThresholdList() {
        let thresholds = [];
        let numSteps = 20;

        for (let i = 1.0; i <= numSteps; i++) {
            let ratio = i / numSteps;
            thresholds.push(ratio);
        }

        thresholds.push(0);
        return thresholds;
    }

    let rootMarginBottom = -40;
    if (window.matchMedia('(min-width: 640px)').matches) {
        rootMarginBottom = -70;
    }

    const obsOptions = {
        // Default is null (Browser viewport). Set a specific parent element:
        // root: null,
        // add 40px inner "margin" area at which the observer starts to calculate:
        rootMargin: `0px 0px ${rootMarginBottom}px 0px`,
        // Default is 0.0 meaning the callback is called as soon 1 pixel is inside the viewport.
        // Set to 1.0 to trigger a callback when 100% of the target element is inside the viewport,
        // or i.e: 0.5 when half of the target element is visible:
        threshold: buildThresholdList(),
    }; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
    const Obs = new IntersectionObserver(inViewport,obsOptions);

    // Attach observer to every [data-inviewport] element:
    document.querySelectorAll('[data-check-inviewport]').forEach(el => {
        Obs.observe(el);
    });
}

export default function Home() {
    const searchParams = useSearchParams()
    const devParameter = searchParams.get('dev')
    let isDevPage = devParameter === ""
    let data: WebpageContent.WebpageContent;

    if(isDevPage){
        data = contentJsonDev
    } else {
        data = contentJson
    }

    const categoryItems = data.experienceCategories.map((experienceCategory, index) =>
        <ExperienceCategory key={index} experienceCategory={experienceCategory} isDevPage={isDevPage}></ExperienceCategory>
    );

    useEffect(() => {
        (async function () {
            initImageGallery()
            initIntersectionObserver()
        })();
    }, [isDevPage]);
  return (
    <main className={`${!isDevPage ? 'bg-[url("../public/images/background.jpg"),url("../public/images/lightpaperfibers.png")]' : 'bg-[url("../public/images/background_dev.jpg"),url("../public/images/dot-grid.png")]'} background-custom-repeat bg-[size:contain,_auto] bg-top flex justify-center pt-[max(83%,_302px)] md:pt-[min(33%,_440px)] sm:px-5`}>
      <div className={`${!isDevPage ? 'rounded-6xl bg-[url("../public/images/lightpaperfibers.png")]' : 'bg-[url("../public/images/dot-grid.png")]'} bg-repeat pt-10 px-5 sm:px-10 w-full max-w-screen-xl`}>
          <div className={`flex lg:justify-start justify-center gap-10 flex-wrap md:flex-nowrap mb-14`}>
              <div className={`flex flex-col mt-[-66%] sm:mt-[-61%] md:mt-[-31%] lg:mt-[-30%] xl:mt-[-29%] w-full items-center gap-20`}>
                  <div className={`w-full pl-5 pr-10 pt-10 md:px-5 md:pt-5 lg:px-10 lg:pt-10`}>
                      {/*aspect square needs separate div container otherwise it will also incorporate the padding*/}
                      <div
                          className={`${!isDevPage ? 'rounded-2xl bg-felixriehm-green-400' : 'bg-felixriehm-blue-400'} relative aspect-square p-2 h-full w-full`}>
                          <img src={data.avatar} alt={'avatar'}
                               className={`h-full ${!isDevPage ? 'rounded-2xl' : ''}`}></img>
                          <object className={'absolute h-[50%] bottom-[-15%] right-[-8%] rotate-[-20deg]'} id="about-hero-image-svg-object" data={heroImage.src}
                                  type="image/svg+xml"></object></div>
                  </div>
                  <div className={`w-full max-w-[440px]`}>
                    <MetaData isDevPage={isDevPage} metaData={data.metaData}></MetaData>
                  </div>
              </div>
              <div className={`w-full flex items-center`}>
                  <p className={'py-[72px] leading-loose first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left'}>{data.about}</p>
              </div>
          </div>
          <div className={'flex flex-col gap-14'}>
              {categoryItems}
          </div>
      </div>
    </main>
  )
}
