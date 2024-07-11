"use client"

import styles from "./team.module.css"
import stylesDown from "./team-slide.module.css"
import prestyle from "@/app/lib/ui-components.module.css"
import {nunito} from "@/app/ui/fonts";

import TeamMateSlide from "./team-slide";

import VKavatar from "./images/VK.webp"
import DZavatar from "./images/DZ.webp"
import VVavatar from "./images/VV.webp"
import VDavatar from "./images/VD.webp"
import BOavatar from "./images/BO.webp"

import {register} from 'swiper/element/bundle';
import {useEffect} from "react";
import {SwiperHTML} from "@/app/lib/types/frontend-config";


register();

function TeamSlider() {
    let teamData = [
        {
            name: "Віктор",
            role: <>Tech лід,<br/>Full-stack розробник</>,
            avatar: VKavatar,
        }, {
            name: "Дарія",
            role: <>Дизайнер,<br/>Дизайнер</>,
            avatar: DZavatar,
        }, {
            name: "Віталій",
            role: <>Бізнес аналітик,<br/>Front-end розробник</>,
            avatar: VDavatar,
        }, {
            name: "Віталій",
            role: <>Тестувальник,<br/>Front-end розробник</>,
            avatar: VVavatar,
        }, {
            name: "Остап",
            role: <>Team лід,<br/>Дизайнер</>,
            avatar: BOavatar,
        },
    ]

    useEffect(() => {
        let swiperElement: null | SwiperHTML = document.getElementById("HOME-TEAM-SLIDER") as SwiperHTML

        if (swiperElement) {
            const swiperParams = {
                speed: 800,
                loop: true,
                autoplay: {
                    delay: 3000,
                },
                centeredSlides: true,
                keyboard: {
                    enabled: true,
                    onlyInViewport: false,
                },
                slideActiveClass: stylesDown.swiperSlideActive,
                breakpoints: {
                    0: {slidesPerView: 1, spaceBetween: 25},
                    450: {slidesPerView: 1, spaceBetween: 25},
                    800: {slidesPerView: 3, spaceBetween: 25},
                    1200: {slidesPerView: 3, spaceBetween: 25},
                }
            };

            Object.assign(swiperElement, swiperParams);

            swiperElement.swiper.slideTo(Math.round(teamData.length / 2), 0)
            swiperElement.initialize();

            console.log("ASIGNED")
        }
    }, [teamData.length])

    return (
        <div className={styles.TeamSlider}>
            <div className={styles.headlineGroup}>
                <h2 className={`${styles.headline} ${prestyle.textH2} ${nunito.className}`}>Хто ми?</h2>
                <p className={`${prestyle.textPlain} ${styles.subHeadline}`}>
                    Ми – команда студентів-програмістів які нещодавно прибули до Львова і стикнулись із тим, що ми зовсім не знаємо місцевості! Саме тоді ми знайшли одне одного і почали прауювати над слідами.
                </p>
            </div>
            <div className={styles.wrapper}>
                <swiper-container init={false}
                                  class={styles.swiper}
                                  id={"HOME-TEAM-SLIDER"}
                >
                    {
                        teamData.map((teamMate, idx) =>
                            <swiper-slide key={`${idx}-tmmt`}>
                                <TeamMateSlide data={teamMate}/>
                            </swiper-slide>
                        )
                    }
                </swiper-container>
            </div>
        </div>
    )
}

export default TeamSlider
