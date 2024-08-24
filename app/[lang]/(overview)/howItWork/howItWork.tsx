"use client"

import HowItWorkOption from "./howItWorkOption";
import {useState} from "react";
import Switch from "@/app/[lang]/ui/switch/switch";

import styles from "./howItWork.module.css"
import prestyle from "@/app/lib/ui-components.module.css"
import {nunito} from "@/app/[lang]/ui/fonts";
import {Dict} from "@/app/[lang]/dictionaries";

export default function HowItWork({t}: {t: Dict}) {
    let [tab, setTab] = useState(t.howItWork.tabs[0])

    return (
        <div className={styles.HowItWork} id="Home-how-to-use">
            <h2 className={`${styles.h2} ${prestyle.textH2} ${nunito.className}`}>
                {t.howItWork.headline}
            </h2>

            <div className={styles.tabs}>
                <Switch setCurrentTab={setTab} values={t.howItWork.tabs} currentTab={tab}/>
            </div>

            <div className={styles.info}>
                <HowItWorkOption t={t} state={tab} />
            </div>
        </div>
    )
}
