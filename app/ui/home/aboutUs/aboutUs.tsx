"use client"

import backgroundPattern from "@/app/ui/home/aboutUs/SVG/backgroundPattern.svg"
import {useEffect, useMemo, useState} from "react";
import Image from "next/image";

import styles from "@/app/ui/home/aboutUs/aboutUs.module.css"
import headerStyles from "@/app/ui/header/header.module.css"
import Content from "./content"
import {contentData as content} from "./content";

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(MotionPathPlugin);

export default function AboutUs() {
    let [headerHeight, setHeaderHeight] = useState(50)

    let stages = useMemo(() =>
        [
            [[`50px`, `calc(50px + ${headerHeight}px)`, `translate(0, 0)`], [`calc(100% - 50px)`, `calc(100% - 50px)`, `translate(-100%, -100%)`]],
            [[`calc(100% - 50px)`, `calc(50px + ${headerHeight}px)`, `translate(-100%, 0)`], [`50px`, `calc(100% - 50px)`, `translate(0, -100%)`]],
            [[`calc(100% - 50px)`, `calc(100% - 50px)`, `translate(-100%, -100%)`], [`50px`, `calc(50px + ${headerHeight}px)`, `translate(0, 0)`]],
            [[`50px`, `100%`, `translate(0, -100%)`], [`calc(100% - 50px)`, `calc(50px + ${headerHeight}px)`, `translate(-100%, 0)`]]
        ], [headerHeight]
    );

    useEffect(()=>{
        let header = document.querySelector<HTMLElement>(`.${headerStyles.Header}`)
        setHeaderHeight(header ? header.offsetHeight : 0)
    }, [])

    useEffect(() => {

        gsap.defaults({ease: "none"})

        gsap.to(`.${styles.background}`, {
            scrollTrigger: {
                trigger: `.${styles.AboutUs}`,
                pin: `.${styles.background}`,
                start: "top top",
                end: "bottom bottom",
                toggleActions: "restart pause reverse pause",
                scrub: 1,
                pinSpacing: false,
            }
        })

        for (let i = 1; i <= content.length; i++) {
            const animElement = document.querySelector<HTMLElement>(`.${styles.anim}${i}`);

            if (animElement) {
                const height = animElement.clientHeight;

                gsap.to(`.${styles.anim}${i}`, {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: `.${styles.AboutUs}`,
                        start: 'top bottom',
                        end: '+=10 bottom'
                    }
                })

                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: `.${styles.container}${i}`,
                        pin: `.${styles.anim}${i}`,
                        start: "top center",
                        end: "+=100px",
                        toggleActions: "restart none reverse restart",
                        scrub: 2,
                        pinSpacing: false,
                    }
                })

                const prevStage = stages.at(i - 2);
                const currStage = stages[i - 1];

                if (prevStage && currStage) {
                    tl.fromTo(`.${styles.anim}${i}`, {opacity: 0}, {
                        opacity: 1,
                        duration: 0.3
                    })
                        .fromTo(`.${styles.backgroundItem1}`, {
                            left: prevStage[0][0],
                            top: prevStage[0][1],
                            transform: prevStage[0][2],
                        }, {
                            left: currStage[0][0],
                            top: currStage[0][1],
                            transform: currStage[0][2],
                            duration: 5,
                        })
                        .fromTo(`.${styles.backgroundItem2}`, {
                            left: prevStage[1][0],
                            top: prevStage[1][1],
                            transform: prevStage[1][2],
                        }, {
                            left: currStage[1][0],
                            top: currStage[1][1],
                            transform: currStage[1][2],
                            duration: 5,
                        }, 0)
                }

                gsap.fromTo(`.${styles.anim}${i} .${styles.animScrollHint}`, {
                    opacity: 0
                }, {
                    opacity: 1,
                    delay: 15,
                    duration: 1,
                    scrollTrigger: {
                        trigger: `.${styles.container}${i}`,
                        start: "top center",
                        toggleActions: "restart none reverse restart",
                    }
                })


                gsap.fromTo(`.${styles.anim}${i}`, {opacity: 1}, {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: `.${styles.container}${i}`,
                        pin: `.${styles.anim}${i}`,
                        start: `top+=100px center`,
                        end: `85%-=${height}px center`,
                        toggleActions: "restart none reverse restart",
                        scrub: 1,
                        pinSpacing: false,
                    }
                })
                gsap.fromTo(`.${styles.anim}${i}`, {opacity: 1}, {
                    opacity: 0,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: `.${styles.container}${i}`,
                        pin: false,
                        start: `85%-=${height}px center`,
                        end: "85% center",
                        toggleActions: "restart complete reverse reverse",
                        scrub: 0.5,
                        pinSpacing: false,
                        anticipatePin: 1,
                    }
                })

            }
        }


        const blocks = document.querySelectorAll(`.${styles.backgroundStatic}`);

        let handleMouseMove = function (event: MouseEvent) {
            let mouseX = event.clientX;
            let mouseY = event.clientY;

            blocks.forEach((block, idx) => {
                let blockRect = block.getBoundingClientRect();
                let blockCenterX = blockRect.left + blockRect.width / 2;
                let blockCenterY = blockRect.top + blockRect.height / 2;

                let distanceX = mouseX - blockCenterX;
                let distanceY = mouseY - blockCenterY;

                gsap.to(block, {
                    x: (-1) ** (idx) * (distanceX / 10),
                    y: (-1) ** (idx) * (distanceY / 10),
                    duration: 0.2
                });
            });
        }

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.globalTimeline.clear();
            document.removeEventListener("mousemove", handleMouseMove);
        }
    }, [headerHeight, content.length]);

    useEffect(() => {
        let header = document.querySelector<HTMLElement>(`.${headerStyles.Header}`)
        if (header) {
            setHeaderHeight(header.offsetHeight)
        }

        let handleResize = () => {
            let header = document.querySelector<HTMLElement>(`.${headerStyles.Header}`)
            if (header) {
                setHeaderHeight(header.offsetHeight)
            }
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div id="Home-about-us" className={styles.AboutUs}>
            <div className={styles.background}>
                <Image height="175" width="175" src={backgroundPattern} alt="круги"
                       className={`${styles.backgroundItem} ${styles.backgroundItem1}`}/>
                <Image height="175" width="175" src={backgroundPattern} alt="круги"
                       className={`${styles.backgroundItem} ${styles.backgroundItem2}`}/>
                <div className={`${styles.backgroundStatic} ${styles.backgroundStatic1}`}></div>
                <div className={`${styles.backgroundStatic} ${styles.backgroundStatic2}`}></div>
            </div>
            {
                <Content />
            }
        </div>
    );
}
