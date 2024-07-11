"use client"

import styles from "./contact.module.css"

import {useState} from "react";
import Image from "next/image";

import plane from '@/app/ui/icons/plane.svg'
import Input from "@/app/ui/input/input";
import TextArea from "@/app/ui/textarea/textarea";



export default function ContactFrom(){
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
            fetch(`${serverOrigin}/api/feedback/new-message`, {
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
                    }
                    else {
                        alert(`Помилка під час надсилання повідомлення: ${data.message}`)
                    }
                })

                .catch(e => {
                    console.log(e)
                    alert(`Помилка під час надсилання повідомлення: ${e.message}`);
                })
                .finally(()=> {
                    setPending(false)
                })

        }
    }

    return (
        <div className="ContactForm">
            <h2 className="ContactForm__h2">ЗВОРОТНІЙ ЗВ`ЯЗОК</h2>

            <form className="ContactForm__form" onSubmit={Submit}>
                <Input disabled={pending} value={name} setValue={setName} type={"text"} label={"Ваше ім'я"} maxLength={100}/>
                <Input disabled={pending} value={email} setValue={setEmail} type={"text"} label={"Ел адреса"} maxLength={150}/>
                <TextArea disabled={pending} value={message} setValue={setProblem} type={"text"} label={"Повідомлення"} maxLength={480}/>

                <button disabled={pending} className="ContactForm__btn" type='submit'>
                    Надіслати
                    <Image className="ContactForm__btn-img"
                           src={plane}
                           alt="plane"
                           height="25"
                           width="25"
                    />
                </button>
            </form>
        </div>
    )
}