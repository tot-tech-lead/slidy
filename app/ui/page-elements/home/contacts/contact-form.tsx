"use client"

import styles from "./contact.module.css"
import prestyle from "@/app/lib/ui-components.module.css"
import {nunito} from "@/app/ui/fonts";

import {useState} from "react";
import Image from "next/image";

import plane from '@/app/lib/icons/plane.svg'
import Input from "@/app/ui/input/input";
import TextArea from "@/app/ui/textarea/textarea";
import clsx from "clsx";


export default function ContactFrom() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [message, setProblem] = useState('');

    let [pending, setPending] = useState(false);

    let Submit = (e) => {
        e.preventDefault()

        if (!name || !email || !message) {
            alert('Будь ласка, заповніть всі поля форми!');
        } else {
            setPending(true)
            fetch(`/api/feedback/new-message`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                })

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    if (data.status === 200) {
                        alert('Повідомлення надіслано успішно!');
                        setName('');
                        setEmail('');
                        setProblem('');
                    } else {
                        alert(`Помилка під час надсилання повідомлення: ${data.message}`)
                    }
                })

                .catch(e => {
                    console.log(e)
                    alert(`Помилка під час надсилання повідомлення: ${e.message}`);
                })
                .finally(() => {
                    setPending(false)
                })

        }
    }

    return (
        <div className={`${styles.ContactForm}`}>
            <h2 className={`${styles.h2} ${prestyle.textH2} ${nunito.className}`}>ЗВОРОТНІЙ ЗВ`ЯЗОК</h2>

            <form className={`${styles.form}`} onSubmit={Submit}>
                <div className={styles.inputGroup}>
                    <Input disabled={pending} value={name} setValue={setName} type={"text"} label={"Ваше ім'я"}
                           maxLength={100}
                           attributes={{
                               "aria-describedby": "name-error"
                           }}                    />
                    <div className={clsx(`${styles.alarm} ${prestyle.textPlain}`, {
                        [styles.alarmGreen]: false
                    })} id="name-error" aria-live="polite" aria-atomic="true">
                        {/*{(state.status !== 200 && state.message) ? state.message : ""}*/}
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <Input disabled={pending} value={email} setValue={setEmail} type={"text"} label={"Ел адреса"}
                           maxLength={150}
                           attributes={{
                               "aria-describedby": "email-error"
                           }}
                    />
                    <div className={clsx(`${styles.alarm} ${prestyle.textPlain}`, {
                        [styles.alarmGreen]: false
                    })} id="email-error" aria-live="polite" aria-atomic="true">
                        {/*{(state.status !== 200 && state.message) ? state.message : ""}*/}
                    </div>
                </div>
                <div className={styles.inputGroup}>
                    <TextArea disabled={pending} value={message} setValue={setProblem} type={"text"}
                              label={"Повідомлення"}
                              maxLength={480}
                              attributes={{
                                  "aria-describedby": "message-error"
                              }}                    />
                    <div className={clsx(`${styles.alarm} ${prestyle.textPlain}`, {
                        [styles.alarmGreen]: false
                    })} id="message-error" aria-live="polite" aria-atomic="true">
                        {/*{(state.status !== 200 && state.message) ? state.message : ""}*/}
                    </div>
                </div>

                <button disabled={pending} className={`${prestyle.buttonFilledWithImg}`} type='submit'>
                    Надіслати
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