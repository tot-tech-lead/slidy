"use client"

import styles from "./team.module.css"
import stylesDown from "./team-slide.module.css"
import prestyle from "../../../lib/ui-components.module.css"
import {nunito} from "../../ui/fonts";

import TeamMateSlide from "./team-slide";

import VKavatar from "./images/VK.webp"
import DZavatar from "./images/DZ.webp"
import VVavatar from "./images/VV.webp"
import VDavatar from "./images/VD.webp"
import BOavatar from "./images/BO.webp"

import {register} from 'swiper/element/bundle';
import {useEffect} from "react";
import {SwiperHTML} from "@/app/lib/types/frontend-config";
import {Dict} from "@/app/[lang]/dictionaries";


register();

function TeamSlider({t}: { t: Dict }) {
    let teamData = [
        {
            name: t.whoWeAre.mates.viktorK.name,
            role: <>{t.whoWeAre.mates.viktorK.positions.map(position => <>{position} <br/></>)}</>,
            avatar: VKavatar,
        }, {
            name: t.whoWeAre.mates.dariaZ.name,
            role: <>{t.whoWeAre.mates.dariaZ.positions.map(position => <>{position} <br/></>)}</>,
            avatar: DZavatar,
        }, {
            name: t.whoWeAre.mates.vitaliiD.name,
            role: <>{t.whoWeAre.mates.vitaliiD.positions.map(position => <>{position} <br/></>)}</>,
            avatar: VDavatar,
        }, {
            name: t.whoWeAre.mates.vitaliiV.name,
            role: <>{t.whoWeAre.mates.vitaliiV.positions.map(position => <>{position} <br/></>)}</>,
            avatar: VVavatar,
        }, {
            name: t.whoWeAre.mates.ostapB.name,
            role: <>{t.whoWeAre.mates.ostapB.positions.map(position => <>{position} <br/></>)}</>,
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
        }
    }, [teamData.length])

    return (
        <div className={styles.TeamSlider}>
            <div className={styles.headlineGroup}>
                <h2 className={`${styles.headline} ${prestyle.textH2} ${nunito.className}`}>{t.whoWeAre.headline}</h2>
                <p className={`${prestyle.textPlain} ${styles.subHeadline}`}>
                    {t.whoWeAre.description}
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
