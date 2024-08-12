"use client"

import HowItWorkOption from "./howItWorkOption";
import {useState} from "react";
import Switch from "@/app/ui/switch/switch";

import styles from "./howItWork.module.css"
import prestyle from "@/app/lib/ui-components.module.css"
import {nunito} from "@/app/ui/fonts";

export default function HowItWork() {
    let [tab, setTab] = useState('Якщо ви турист:')

    return (
        <div className={styles.HowItWork} id="Home-how-to-use">
            <h2 className={`${styles.h2} ${prestyle.textH2} ${nunito.className}`}>
                Як це працює?
            </h2>

            <div className={styles.tabs}>
                <Switch setCurrentTab={setTab} values={["Якщо ви турист:", "Якщо ви екскурсовод:"]} currentTab={tab}/>
            </div>

            <div className={styles.info}>
                <HowItWorkOption state={tab} />
            </div>
        </div>
    )
}
