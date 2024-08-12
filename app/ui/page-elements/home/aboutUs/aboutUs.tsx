"use client";

import backgroundPattern from "@/app/ui/page-elements/home/aboutUs/SVG/backgroundPattern.svg";
import React, {useEffect, useMemo, useState, useCallback} from "react";
import Image from "next/image";

import styles from "@/app/ui/page-elements/home/aboutUs/aboutUs.module.css";
import headerStyles from "@/app/ui/page-elements/header/header.module.css";
import {contentData as content} from "./content";

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

import AboutUsContent from "@/app/ui/page-elements/home/aboutUs/content"

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
    const [headerHeight, setHeaderHeight] = useState(50);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor;

        if (/android/i.test(userAgent)) {
            setIsMobile(true);
        } else if (/iPad|iPhone|iPod/.test(userAgent)) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    const stages = useMemo(
        () => !isMobile ? [
            [
                [`50px`, `calc(50px + ${headerHeight}px)`, `translate(0, 0)`],
                [`calc(100% - 50px)`, `calc(100% - 50px)`, `translate(-100%, -100%)`],
            ],
            [
                [`calc(100% - 50px)`, `calc(50px + ${headerHeight}px)`, `translate(-100%, 0)`],
                [`50px`, `calc(100% - 50px)`, `translate(0, -100%)`],
            ],
            [
                [`calc(100% - 50px)`, `calc(100% - 50px)`, `translate(-100%, -100%)`],
                [`50px`, `calc(50px + ${headerHeight}px)`, `translate(0, 0)`],
            ],
            [
                [`50px`, `100%`, `translate(0, -100%)`],
                [`calc(100% - 50px)`, `calc(50px + ${headerHeight}px)`, `translate(-100%, 0)`],
            ],
        ] : [],
        [headerHeight, isMobile]
    );

    const handleResize = useCallback(() => {
        const header = document.querySelector<HTMLElement>(`.${headerStyles.Header}`);
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }
    }, []);

    useEffect(() => {
        const header = document.querySelector<HTMLElement>(`.${headerStyles.Header}`);
        setHeaderHeight(header ? header.offsetHeight : 0);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    useEffect(() => {
        let handleMouseMove: (event: MouseEvent) => void;

        gsap.defaults({ease: "none"});

        gsap.to(`.${styles.background}`, {
            scrollTrigger: {
                trigger: `.${styles.AboutUs}`,
                pin: `.${styles.background}`,
                start: "top top",
                end: "bottom bottom",
                toggleActions: "restart pause reverse pause",
                scrub: false,
                pinSpacing: false,
            },
        });

        if (!isMobile) {
            content.forEach((_, i) => {
                const animElement = document.querySelector(`.${styles.anim}${i + 1}`);

                if (animElement) {
                    const height = animElement.clientHeight;

                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: `.${styles.container}${i + 1}`,
                            pin: `.${styles.anim}${i + 1}`,
                            start: "top center",
                            end: "+=100px",
                            toggleActions: "restart none reverse restart",
                            scrub: 2,
                            pinSpacing: false,
                        },
                    });

                    const prevStage = stages[i - 1];
                    const currStage = stages[i];

                    if (prevStage && currStage) {
                        tl.fromTo(
                            `.${styles.backgroundItem1}`,
                            {
                                left: prevStage[0][0],
                                top: prevStage[0][1],
                                transform: prevStage[0][2],
                            },
                            {
                                left: currStage[0][0],
                                top: currStage[0][1],
                                transform: currStage[0][2],
                                duration: 5,
                            }
                        )
                            .fromTo(
                                `.${styles.backgroundItem2}`,
                                {
                                    left: prevStage[1][0],
                                    top: prevStage[1][1],
                                    transform: prevStage[1][2],
                                },
                                {
                                    left: currStage[1][0],
                                    top: currStage[1][1],
                                    transform: currStage[1][2],
                                    duration: 5,
                                },
                                0
                            );
                    }

                    gsap.fromTo(
                        `.${styles.anim}${i + 1} .${styles.animScrollHint}`,
                        {opacity: 0},
                        {
                            opacity: 1,
                            delay: 15,
                            duration: 1,
                            scrollTrigger: {
                                trigger: `.${styles.container}${i + 1}`,
                                start: "top center",
                                toggleActions: "restart none reverse restart",
                            },
                        }
                    );

                    gsap.fromTo(
                        animElement,
                        {opacity: 1},
                        {
                            opacity: 0,
                            scrollTrigger: {
                                trigger: `.${styles.container}${i + 1}`,
                                pin: false,
                                start: `85%-=${height}px center`,
                                end: "85% center",
                                toggleActions: "restart complete reverse reverse",
                                scrub: 0.5,
                                pinSpacing: false,
                                anticipatePin: 1,
                            },
                        }
                    );
                }
            });

            const blocks = document.querySelectorAll(`.${styles.backgroundStatic}`);
            let animationFrameId: number;

            handleMouseMove = (event: MouseEvent) => {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = requestAnimationFrame(() => {
                    const mouseX = event.clientX;
                    const mouseY = event.clientY;

                    blocks.forEach((block, idx) => {
                        const blockRect = block.getBoundingClientRect();
                        const blockCenterX = blockRect.left + blockRect.width / 2;
                        const blockCenterY = blockRect.top + blockRect.height / 2;

                        const distanceX = mouseX - blockCenterX;
                        const distanceY = mouseY - blockCenterY;

                        gsap.to(block, {
                            x: (-1) ** idx * (distanceX / 10),
                            y: (-1) ** idx * (distanceY / 10),
                            duration: 0.2,
                        });
                    });
                });
            };

            document.addEventListener("mousemove", handleMouseMove);
        } else {
            gsap.to(`.${styles.anim}`, {
                opacity: 1
            })
        }

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            gsap.globalTimeline.clear();
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [headerHeight, stages, isMobile]);

    return (
        <div id="Home-about-us" className={styles.AboutUs}>
            <div className={styles.background}>
                <Image
                    height="175"
                    width="175"
                    src={backgroundPattern}
                    alt="круги"
                    className={`${styles.backgroundItem} ${styles.backgroundItem1}`}
                />
                <Image
                    height="175"
                    width="175"
                    src={backgroundPattern}
                    alt="круги"
                    className={`${styles.backgroundItem} ${styles.backgroundItem2}`}
                />
                <div className={`${styles.backgroundStatic} ${styles.backgroundStatic1}`}></div>
                <div className={`${styles.backgroundStatic} ${styles.backgroundStatic2}`}></div>
            </div>
            <AboutUsContent/>
        </div>
    );
}
