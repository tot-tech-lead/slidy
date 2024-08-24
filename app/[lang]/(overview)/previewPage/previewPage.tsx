"use client"

import styles from "./previewPage.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import {nunito, nunitoSans} from "@/app/[lang]/ui/fonts";

import React, {useEffect, useMemo, useState} from "react"
import clsx from "clsx";
import {images} from "@/app/lib/data-define"
import {register} from 'swiper/element/bundle';
import {useParams, useRouter} from "next/navigation";
import Image from 'next/image';

import gsap from "gsap";
import {SwiperEl, SwiperProgressEvent} from "@/app/lib/types/frontend-config";

import Slides from "./slides";
import ImageSkeleton from "@/app/[lang]/ui/skeleton/image-skeleton";
import {Dict} from "@/app/[lang]/dictionaries";

import {homeImagesCityTranslation} from "@/app/lib/data-define";
import {getLocale} from "@/app/lib/utils/getLocale";

register();


function PreviewPage({t}: { t: Dict }) {
    let router = useRouter();

    let {lang} = useParams()

    let [currentPage, setCurrentPage] = useState("Львів");
    let [swiperPending, setSwiperPending] = useState(true)

    let cities = useMemo(() => Object.keys(images), []);


    useEffect(() => {
        let swiperEl: (SwiperEl | null) = document.querySelector(`.${styles.swiper}`)

        if (swiperEl && swiperEl.swiper.initialized) {
            swiperEl.swiper.slideTo(0, 0)
            swiperEl.swiper.autoplay.start();
        }
    }, [currentPage]);

    useEffect(() => {
        const rootElement = document.documentElement;
        let swiperEl: (SwiperEl | null) = document.querySelector(`.${styles.swiper}`)

        let x = setInterval(() => {
            if (swiperEl) {
                if (swiperEl.swiper.initialized) {
                    rootElement.style.setProperty('--time-left', String(swiperEl.swiper.autoplay.timeLeft));
                }
            }
        }, 60)

        let listenerOnProgress = (e: Event) => {
            const event = e as SwiperProgressEvent;
            const detail = event.detail as number[];
            if (detail[1] === 1) {
                setTimeout(() => {
                    let currentCityIndex = cities.indexOf(currentPage);

                    if (currentCityIndex + 1 === cities.length) {
                        setCurrentPage(cities[0])
                    } else {
                        setCurrentPage(cities[currentCityIndex + 1])
                    }
                }, 6000)
            }
        }

        if (swiperEl) {
            swiperEl.addEventListener("swiperprogress", listenerOnProgress as EventListener);
        }

        return () => {
            clearInterval(x)
            if (swiperEl) {
                swiperEl.removeEventListener("swiperprogress", listenerOnProgress as EventListener);
            }
        }
    }, [currentPage, cities])

    useEffect(() => {
        if (typeof window !== "undefined") {
            let tl = gsap.timeline();
            let handleResize = () => {
                tl.kill()
                if (window.innerWidth <= 800) {
                    tl = gsap.timeline()
                    let animElements = document.querySelector<HTMLElement>(".PreviewPage__animate-up-down")

                    if (animElements) {
                        tl.fromTo(".PreviewPage__animate-up-down", {
                            scale: 0.9, opacity: 0
                        }, {
                            stagger: 0.1,
                            scale: 1,
                            duration: 3,
                            opacity: 1
                        })
                        tl.to(".PreviewPage__animate-up-down", {
                            y: -20,
                            duration: 2,
                            yoyo: true,
                            repeat: -1
                        })
                    }
                }
            }

            handleResize()
            window.addEventListener("resize", handleResize)

            return () => {
                tl.kill()
                window.removeEventListener("resize", handleResize)
            }
        }
    }, []);

    let handleControlClick = (item: string) => {
        return () => {
            setCurrentPage(item)
            setSwiperPending(true)
        }
    }


    return (
        <section className={styles.PreviewPage} id="Home-preview-page">
            <div className={styles.background}>
                <svg className={clsx("PreviewPage__animate-up-down", styles.topBlob)} width="250" height="250"
                     viewBox="0 0 295 388" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M101 370.899C111.274 371.01 121.079 366.725 130.958 363.9C140.58 361.15 149.972 357.804 159.318 354.226C168.62 350.665 178.484 348.084 186.759 342.54C195.049 336.986 199.685 327.018 208.05 321.577C217.176 315.64 229.029 315.017 238.166 309.096C247.258 303.204 256.942 296.516 261.724 286.794C266.614 276.853 261.342 264.147 265.356 253.821C269.443 243.309 281.506 237.141 285.174 226.475C288.701 216.216 286.125 204.847 285.923 194C285.721 183.208 288.776 171.402 283.965 161.738C278.582 150.924 263.482 147.546 257.556 137.018C252.474 127.989 257.759 115.456 252.795 106.361C247.869 97.338 235.97 94.1544 229.709 86.0005C223.252 77.5912 223.676 64.2907 215.402 57.6611C207.042 50.9623 193.931 54.4239 184.342 49.6485C175.187 45.0895 169.447 35.419 160.563 30.352C151.644 25.265 140.989 24.1116 131.743 19.6476C121.021 14.4712 112.852 0.463516 101 1.59611C88.3345 2.80641 83.4695 21.7934 71.2758 25.4258C60.4486 28.6512 49.1055 19.8782 37.8208 20.4167C26.6971 20.9475 15.4545 23.6003 5.48602 28.565C-4.43239 33.5048 -13.0552 41.0418 -20.3456 49.3861C-27.6354 57.7298 -34.1992 67.2031 -37.5098 77.7766C-40.9872 88.8832 -36.1283 101.593 -40.1151 112.527C-43.5287 121.89 -52.1913 128.325 -58.694 135.876C-66.3299 144.744 -78.4663 150.645 -82.4231 161.658C-86.0895 171.862 -81.7865 183.384 -79.5775 194C-77.4196 204.371 -69.7668 213.466 -69.4397 224.053C-69.0697 236.028 -81.6638 247.735 -77.5693 258.994C-73.4757 270.251 -56.141 271.003 -48.8974 280.544C-42.4139 289.083 -46.3878 303.874 -38.2201 310.82C-29.2253 318.469 -13.8591 312.713 -3.79936 318.895C4.94145 324.267 6.40212 337.423 14.7573 343.377C22.9103 349.187 33.8788 349.145 43.3208 352.473C52.723 355.787 61.6595 360.221 71.1558 363.255C80.9566 366.386 90.7119 370.788 101 370.899Z"
                        fill="#FEA800"/>
                </svg>
                <svg className={clsx("PreviewPage__animate-up-down", styles.bottomBlob)} width="250" height="250"
                     viewBox="0 0 240 388" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M370.899 193.998C371.009 183.724 366.724 173.919 363.9 164.04C361.149 154.419 357.804 145.026 354.226 135.681C350.665 126.378 348.084 116.514 342.54 108.239C336.985 99.949 327.018 95.3128 321.577 86.9487C315.639 77.8226 315.017 65.9692 309.096 56.8325C303.204 47.7407 296.515 38.0564 286.794 33.2744C276.853 28.3844 264.146 33.6567 253.821 29.6425C243.308 25.5557 237.141 13.4918 226.475 9.82477C216.216 6.29761 204.846 8.87309 194 9.07552C183.208 9.27693 171.401 6.22253 161.738 11.033C150.923 16.4167 147.546 31.5162 137.018 37.4419C127.989 42.5242 115.456 37.2394 106.361 42.2035C97.3377 47.1289 94.1542 59.0286 86.0003 65.2893C77.591 71.7461 64.2905 71.3225 57.6609 79.5962C50.9621 87.9563 54.4237 101.067 49.6482 110.657C45.0892 119.812 35.4188 125.552 30.3517 134.435C25.2648 143.354 24.1113 154.009 19.6474 163.255C14.471 173.977 0.463272 182.146 1.59586 193.998C2.80616 206.664 21.7932 211.529 25.4256 223.722C28.6509 234.55 19.878 245.893 20.4164 257.177C20.9472 268.301 23.6 279.544 28.5648 289.512C33.5046 299.431 41.0415 308.054 49.3858 315.344C57.7295 322.634 67.2028 329.198 77.7764 332.508C88.8829 335.986 101.593 331.127 112.527 335.113C121.889 338.527 128.325 347.19 135.876 353.692C144.743 361.328 150.645 373.465 161.657 377.421C171.862 381.088 183.384 376.785 194 374.576C204.37 372.418 213.466 364.765 224.053 364.438C236.028 364.068 247.734 376.662 258.994 372.568C270.251 368.474 271.003 351.139 280.543 343.896C289.083 337.412 303.874 341.386 310.82 333.218C318.469 324.224 312.713 308.857 318.895 298.798C324.267 290.057 337.423 288.596 343.377 280.241C349.187 272.088 349.145 261.12 352.472 251.678C355.786 242.275 360.221 233.339 363.255 223.842C366.386 214.042 370.788 204.286 370.899 193.998Z"
                        fill="#FEA800"/>
                </svg>
            </div>

            <div className={styles.citiesSwiper}>
                <swiper-container
                    slides-per-view="1"
                    autoplay={true}
                    autoplay-delay={6000}
                    speed="500"
                    className={styles.swiper}
                    pagination="true"
                    style={{width: "auto", height: "auto"}}
                >
                    {swiperPending && <ImageSkeleton/>}
                    <Slides t={t} setSwiperPending={setSwiperPending} currentPage={currentPage}/>
                </swiper-container>
            </div>

            <div className={styles.section}>
                <div className={styles.welcomeText}>
                    <div className={styles.headlineContainer}>
                        <div className={`${styles.headline} ${prestyle.textH1}`}><h1
                            className={nunito.className}>{t.title}</h1>
                        </div>
                        <div
                            className={`${prestyle.textSubheadline} ${styles.subheadline} ${nunitoSans.className}`}>
                            {t.desc}
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={`${prestyle.buttonFilled} ${nunitoSans.className}`}
                                onClick={() => router.push("/tours/all/all")}
                        >{t.action}
                        </button>
                    </div>
                </div>
            </div>

            <nav className={styles.iconsDataContainer}>
                {
                    cities.map((item, idx) =>
                        <div key={`pager-${idx}`}
                             className={clsx(styles.iconsContainer, {
                                 [styles.iconsContainer_active]: currentPage === item
                             })}
                        >
                            <div className={styles.btnContainer}>
                                <button onClick={handleControlClick(item)}
                                        aria-label={`${t.slider.buttonCaption} ${homeImagesCityTranslation[item][getLocale(lang)] || ""}`}
                                        className={styles.iconsContainerIcon}>
                                    <Image className={styles.iconsContainerIconPhoto}
                                           src={images[item][0]["125"]}
                                           alt={homeImagesCityTranslation[item][getLocale(lang)] || item}
                                           height={80}
                                           width={150}
                                    />
                                </button>
                            </div>

                            <p className={`${styles.iconsContainerIconPhotoName} ${prestyle.textSmallSemiVisible} ${nunitoSans.className}`}>
                                {homeImagesCityTranslation[item][getLocale(lang)] || ""}
                            </p>
                        </div>
                    )
                }
            </nav>
        </section>
    )
}

export default PreviewPage
