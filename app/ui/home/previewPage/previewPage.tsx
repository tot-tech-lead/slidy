"use client"

import styles from "@/app/ui/home/previewPage/previewPage.module.css"
import prestyle from "@/app/ui/ui-components.module.css"

import {nunito} from "@/app/ui/fonts";

import React, {useEffect, useMemo, useRef, useState} from "react"
import clsx from "clsx";
import {images} from "@/app/lib/data-define"
import {register} from 'swiper/element/bundle';
import {useRouter} from "next/navigation";
import Image from 'next/image';

register();

import {SwiperEl, SwiperProgressEvent} from "@/app/lib/types";


function PreviewPage() {
    let router = useRouter();

    let [currentPage, setCurrentPage] = useState("Львів");
    let [imgH, setImgH] = useState(0);
    let [imgW, setImgW] = useState(0);

    let swiperRef = useRef(null)

    let cities = useMemo(() => Object.keys(images), []);


    useEffect(() => {
        let swiperEl : (SwiperEl | null) = document.querySelector(`.${styles.swiper}`)

        if (swiperEl && swiperEl.swiper.initialized) {
            swiperEl.swiper.slideTo(0, 0)
            swiperEl.swiper.autoplay.start();
        }
    }, [currentPage, swiperRef.current]);

    useEffect(() => {
        const rootElement = document.documentElement;
        let swiperEl : (SwiperEl | null) = document.querySelector(`.${styles.swiper}`)

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
    }, [currentPage, cities, swiperRef.current])

    useEffect(() => {
        const handleResizing = () => {
            console.log("resize");

            const height = window.innerHeight || document.documentElement.offsetHeight;
            const width = window.innerWidth || document.documentElement.offsetWidth;

            setImgH(height - 160);
            setImgW(width);
        };

        handleResizing();

        window.addEventListener("resize", handleResizing);

        return () => {
            window.removeEventListener("resize", handleResizing);
        };
    }, []);


    return (
        <section className={styles.PreviewPage} id="Home-preview-page">
            <div className={styles.citiesSwiper} ref={swiperRef}>
                <swiper-container
                    slides-per-view="1"
                    autoplay={true}
                    autoplay-delay={6000}
                    speed="500"
                    class={styles.swiper}
                    pagination="true"
                    style={{ width: "auto", height: "auto" }}
                >
                    {
                        images[currentPage].map((slide, idx) =>
                            <swiper-slide style={{width: "100vw"}} class={styles.swiperSlide} lazy="true" key={`main-slide-${idx}`}>
                                <Image className={styles.swiperImage}
                                       src={slide.Photo}
                                       alt={`Огляд міста ${currentPage} ${idx + 1}`}
                                       fill={true}
                                       sizes='100w'
                                       priority={idx === 0}
                                />
                            </swiper-slide>
                        )
                    }
                </swiper-container>
            </div>

            <div className={styles.section}>
                <div className={styles.welcomeText}>
                    <div className={styles.headlineContainer}>
                        <div className={`${styles.headline} ${prestyle.textH1} ${nunito.className}`}><h1>Slidy</h1></div>
                        <div className={`${prestyle.textSubheadline} ${styles.subheadline}`}>Подорожуй улюбленим містом без обмежень!</div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={`${prestyle.buttonFilled}`}
                                onClick={() => router.push("/tours/all/all")}
                        >Шукати екскурсію
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
                                <button onClick={() => setCurrentPage(item)}
                                        aria-label={`Перегляд фото міста ${item}`}
                                        className={styles.iconsContainerIcon}>
                                    <Image className={styles.iconsContainerIconPhoto}
                                           src={images[item][0]["125"]}
                                           alt={item}
                                           height={80}
                                           width={150}
                                    />
                                </button>
                            </div>

                            <p className={`${styles.iconsContainerIconPhotoName} ${prestyle.textSmallSemiVisible}`}>{item}</p>
                        </div>
                    )
                }
            </nav>
        </section>
    )
}

export default PreviewPage
