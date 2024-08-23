'use client'

import styles from "./not-found.module.css"
import {nunito} from "@/app/[lang]/ui/fonts";
import prestyle from "../lib/ui-components.module.css"
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

let fallbackTexts = [
    "Ой лишенько!",
    "...",
    "От халепа...",
    "Щось тут явно не так 🤔",
    "Ауууу!?....",
    "Мені здається чи ви заблукали?",
    "Вам куди?",
    "Дідька лисого!",
]

export default function NotFound() {
    let pathname = usePathname()
    let [randomIndex, setRandomIndex] = useState(0)

    useEffect(() => {
        setRandomIndex(Math.floor(Math.random() * fallbackTexts.length - 1))
    }, []);

    console.log(randomIndex)

    return (
        <div className={styles.NotFound}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <h1 className={`${styles.headline} ${prestyle.textH1} ${nunito.className}`}>404</h1>
                    <p className={`${styles.subheadline} ${prestyle.textBigBold} ${nunito.className}`}>Сторінку не знайдено</p>
                </div>
                <div className={styles.right}>
                    <h2 className={`${styles.headline} ${prestyle.textH3} ${nunito.className}`}>
                        {fallbackTexts[randomIndex]}
                    </h2>
                    <p className={`${prestyle.textPlain} ${styles.para}`}>
                        Сторінку за адресою <code>{pathname}</code> не знайдено! Сторінки не існує, або вона перебуває у
                        розробці. <br/><br/>
                        Якщо ви вважаєте що страпилась помилка, напишіть нам за ел.
                        адресою <a href="mailto:tot.viktor.kindrat@gmail.com">tot.viktor.kindrat@gmail.com</a> або у телеграм <a
                        href="https://mexicancat228.t.me">@mexicancat228</a>
                    </p>
                </div>
            </div>
        </div>
    )
}