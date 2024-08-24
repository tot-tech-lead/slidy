'use client'

import styles from "./wait-list.module.css"
import prestyle from "@/app/lib/ui-components.module.css"
import {nunito, nunitoSans} from "@/app/[lang]/ui/fonts";

import steps from "./SVG/steps.svg";
import plane from "@/app/lib/icons/plane.svg";
import Image from "next/image";

import {appendUser, State} from "@/app/lib/action/wait-list";
import {useActionState, useEffect} from "react"
import clsx from "clsx";
import {Dict} from "@/app/[lang]/dictionaries";


export default function WaitListForm({t}: {t: Dict}) {
    let initialState: State = { message: null, errors: {} };
    let [state, formAction, pending] = useActionState(appendUser, initialState)

    useEffect(()=>{
        if (state.status === 200) {
            alert("Вас додано у список очікування")
        }
    }, [state])

    return (
        <div className={styles.WaitListForm}>
            <div className={styles.background}>
                <Image src={steps} alt="сліди" className={styles.background1}/>
                <Image src={steps} alt="slidy" className={styles.background2}/>
            </div>
            <div className={styles.wrapper}>
                <h2 className={`${styles.h2} ${prestyle.textH2} ${nunito.className}`}>
                    ⚡️ {t.waitList.headline}
                </h2>

                <p className={`${styles.paragraph} ${prestyle.textBig} ${nunitoSans.className}`}>
                    {t.waitList.description}
                </p>

                <form className={styles.form}
                      action={formAction}
                      aria-describedby="email-error"
                >
                    <input
                        className={`${styles.input} ${prestyle.textPlain}`} type="email" placeholder={t.waitList.input.placeholder} name="email" required={true}
                    />
                    <button aria-disabled={pending} disabled={pending} className={`${styles.button} ${prestyle.buttonFilled} ${nunitoSans.className}`} type="submit">
                        <span className={styles.buttonText}>
                            {t.waitList.input.action}
                        </span>
                        <Image className={styles.btnImg} src={plane} alt="plane" height="25" width="25"/>
                    </button>
                </form>
                <div className={clsx(`${styles.alarm} ${prestyle.textPlain} ${nunitoSans.className}`, {
                    [styles.alarmGreen] : state.status === 409
                })} id="email-error" aria-live="polite" aria-atomic="true">
                    {(state.status !== 200 && state.message) ? state.message : ""}
                </div>
            </div>
        </div>
    )
}