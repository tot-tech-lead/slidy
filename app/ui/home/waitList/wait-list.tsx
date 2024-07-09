'use client'

import styles from "./wait-list.module.css"
import steps from "./SVG/steps.svg";
import plane from "./SVG/plane.svg";
import Image from "next/image";

import {appendUser, State} from "@/app/lib/action/wait-list";
import {useActionState, useEffect} from "react"


export default function WaitListForm() {
    let initialState: State = { message: null, errors: {} };
    let [state, formAction, pending] = useActionState(appendUser, initialState)

    useEffect(()=>{
        if (state.status === 200) {
            alert("Вас додано у список очікування")
        }
    }, [state])

    return (
        <div className="WaitListForm">
            <div className="WaitListForm__background">
                <Image src={steps} alt="сліди" className="WaitListForm__background-1"/>
                <Image src={steps} alt="slidy" className="WaitListForm__background-2"/>
            </div>
            <div className="WaitListFrom__wrapper">
                <h2 className="WaitListForm__h2">
                    ⚡️ Вже кортить все спробувати?
                </h2>

                <p className="WaitListForm__paragraph">
                    Поки що, наш сайт перебуває на стадії розробки. Ми активно працюємо заради того, щоб ви могли
                    покращити свої подорожі якомога швидше. Якщо ви хочете дізнатись про завершення робіт першими,
                    зашилште свою електронну адресу у полі нижче.
                    <br/>Після того як все буде готово, ми зв&apos;яжемося з вами за цією адресою.
                </p>

                <form className="WaitListForm__form"
                      action={formAction}
                      aria-describedby="email-error"
                >
                    <input
                        className="WaitListForm__input" type="email" placeholder="Ваша електронна адреса" name="email" required={true}
                    />
                    <button aria-disabled={pending} disabled={pending} className="WaitListForm__button" type="submit">
                        <span className="Button__text">Сповістіть мене!</span>
                        <Image className="WaitList__btn-img" src={plane} alt="plane" height="25" width="25"/>
                    </button>
                </form>
                <div id="email-error" aria-live="polite" aria-atomic="true">
                    {(state.status !== 200 && state.message) ? state.message : ""}
                </div>
            </div>
        </div>
    )
}