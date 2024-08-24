"use client"

import styles from "./contact-form.module.css"
import prestyle from "@/app/lib/ui-components.module.css"
import {nunito, nunitoSans} from "@/app/[lang]/ui/fonts";

import {sendMessageToTelegram, State} from "@/app/lib/action/bot";

import {useActionState, useEffect, useState} from "react";
import Image from "next/image";

import clsx from "clsx";
import plane from '@/app/lib/icons/plane.svg'
import Input from "@/app/[lang]/ui/input/input";
import TextArea from "@/app/[lang]/ui/textarea/textarea";
import {Dict} from "@/app/[lang]/dictionaries";


export default function ContactFrom({t}: { t: Dict }) {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [message, setProblem] = useState('');

    let initialState: State = {message: null, errors: {}};

    let [state, formAction, pending] = useActionState(sendMessageToTelegram, initialState);


    useEffect(() => {
        if (state?.status === 200) {
            alert("Дякуємо за повідомлення 😊\nПостараємось відповісти якомога швидше ⚡️")
            setName("")
            setEmail("")
            setProblem("")
        }
    }, [state?.status]);

    return (
        <div className={`${styles.ContactForm}`}>

            <div className={styles.headlineGroup}>
                <h2 className={`${styles.h2} ${prestyle.textH2} ${nunito.className}`}>{t.headline}</h2>
                <div className={clsx(`${styles.alarm} ${prestyle.textPlain} ${nunitoSans.className}`, {
                    [styles.alarmGreen]: false
                })} id="manual-error" aria-live="polite" aria-atomic="true">
                    {(state?.status !== 200 && state?.message && state.errors?.manual) ? String(state.errors.manual) : ""}
                </div>
            </div>


            <form className={`${styles.form}`} action={formAction}>
                <div className={styles.inputGroup}>
                    <Input disabled={pending} value={name} setValue={setName} type={"text"} label={t.namePlaceholder}
                           maxLength={100}
                           attributes={{
                               name: "name",
                               "aria-describedby": "name-error"
                           }}/>
                    <div className={clsx(`${styles.alarm} ${prestyle.textPlain} ${nunitoSans.className}`, {
                        [styles.alarmGreen]: false
                    })} id="name-error" aria-live="polite" aria-atomic="true">
                        {(state?.status !== 200 && state?.message && state.errors?.name) ? String(state.errors.name) : ""}
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <Input disabled={pending} value={email} setValue={setEmail} type={"text"} label={t.emailPlaceholder}
                           maxLength={150}
                           attributes={{
                               name: "email",
                               "aria-describedby": "email-error"
                           }}
                    />
                    <div className={clsx(`${styles.alarm} ${prestyle.textPlain} ${nunitoSans.className}`, {
                        [styles.alarmGreen]: false
                    })} id="email-error" aria-live="polite" aria-atomic="true">
                        {(state?.status !== 200 && state?.message && state.errors?.email) ? String(state.errors.email) : ""}
                    </div>
                </div>
                <div className={styles.inputGroup}>
                    <TextArea disabled={pending} value={message} setValue={setProblem}
                              label={t.messagePlaceholder}
                              maxLength={480}
                              attributes={{
                                  name: "message",
                                  "aria-describedby": "message-error"
                              }}/>
                    <div className={clsx(`${styles.alarm} ${prestyle.textPlain}`, nunitoSans.className, {
                        [styles.alarmGreen]: false
                    })} id="message-error" aria-live="polite" aria-atomic="true">
                        {(state?.status !== 200 && state?.message && state.errors?.message) ? String(state.errors.message) : ""}
                    </div>
                </div>

                <button disabled={pending} className={`${prestyle.buttonFilledWithImg} ${nunitoSans.className}`}
                        type='submit'>
                    {t.sendButton}
                    <Image src={plane}
                           alt="plane"
                           height="25"
                           width="25"
                    />
                </button>
            </form>
        </div>
    )
}