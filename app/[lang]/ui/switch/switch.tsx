import styles from "./switch.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import clsx from "clsx"

import {gsap} from "gsap";
import {useEffect, useId} from "react";

interface params {
    values: string[],
    currentTab: number | string,
    setCurrentTab: Function
}

export default function Switch({values, currentTab, setCurrentTab}: params) {
    const id = useId().slice(1, -1)

    useEffect(() => {
        if (document.querySelector(`.Switch_${id}`)) {
            let currentTabElement = document.querySelector<HTMLElement>(`.Switch_${id} .${styles.item_selected}`)

            if (currentTabElement) {
                let properties = {
                    top: currentTabElement.offsetTop,
                    left: currentTabElement.offsetLeft,
                    width: currentTabElement.offsetWidth
                }

                gsap.to(`.Switch_${id} .${styles.selector}`, {
                    ...properties, duration: 0.7, ease: "elastic.out(1,0.3)"
                })
            }
        }
    }, [currentTab, id]);


    useEffect(() => {
        let resizeHandler = () => {
            let currentTabElement = document.querySelector<HTMLElement>(`.Switch_${id} .${styles.item_selected}`)

            if (currentTabElement) {
                let properties = {
                    top: currentTabElement.offsetTop,
                    left: currentTabElement.offsetLeft,
                    width: currentTabElement.offsetWidth
                }

                gsap.to(`.Switch_${id} .${styles.selector}`, {
                    ...properties, duration: 0.7, ease: "elastic.out(1,0.3)"
                })
            }
        }

        window.addEventListener("resize", resizeHandler)

        return () => {
            window.removeEventListener("resize", resizeHandler)
        }
    }, [id])

    return (
        <div className={`switch ${styles.Switch} Switch_${id}`}>
            <div className={styles.selector}></div>
            {
                values.map((item, key) =>
                    <div key={`tab-${Date.now()}-${key}`}
                         className={clsx(`${styles.item} ${prestyle.textBig}`, {
                             [styles.item_selected]: item === currentTab
                         })}
                         onClick={() => setCurrentTab(item)}>
                        {item}
                    </div>
                )
            }
        </div>
    )
}
