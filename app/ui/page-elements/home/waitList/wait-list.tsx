'use client'

import styles from "./wait-list.module.css"
import prestyle from "@/app/lib/ui-components.module.css"
import {nunito} from "@/app/ui/fonts";

import steps from "./SVG/steps.svg";
import plane from "@/app/ui/icons/plane.svg";
import Image from "next/image";

import {appendUser, State} from "@/app/lib/action/wait-list";
import {useActionState, useEffect} from "react"
import clsx from "clsx";


export default function WaitListForm() {
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
                    ⚡️ Вже кортить все спробувати?
                </h2>

                <p className={`${styles.paragraph} ${prestyle.textBig}`}>
                    Поки що, наш сайт перебуває на стадії розробки. Ми активно працюємо заради того, щоб ви могли
                    покращити свої подорожі якомога швидше. Якщо ви хочете дізнатись про завершення робіт першими,
                    зашилште свою електронну адресу у полі нижче.
                    <br/>Після того як все буде готово, ми зв&apos;яжемося з вами за цією адресою.
                </p>

                <form className={styles.form}
                      action={formAction}
                      aria-describedby="email-error"
                >
                    <input
                        className={`${styles.input} ${prestyle.textPlain}`} type="email" placeholder="Ваша електронна адреса" name="email" required={true}
                    />
                    <button aria-disabled={pending} disabled={pending} className={`${styles.button} ${prestyle.buttonFilled}`} type="submit">
                        <span className={styles.buttonText}>Сповістіть мене!</span>
                        <Image className={styles.btnImg} src={plane} alt="plane" height="25" width="25"/>
                    </button>
                </form>
                <div className={clsx(`${styles.alarm} ${prestyle.textPlain}`, {
                    [styles.alarmGreen] : state.status === 409
                })} id="email-error" aria-live="polite" aria-atomic="true">
                    {(state.status !== 200 && state.message) ? state.message : ""}
                </div>
            </div>
        </div>
    )
}