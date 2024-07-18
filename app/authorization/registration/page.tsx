"use client";

import "./register.module.css"

import Datepick from "@/app/ui/datepicker/datepiscker";
import Input from "@/app/ui/input/input";
import {useActionState, useState} from "react";
import styles from "./register.module.css";
import prestyle from "@/app/lib/ui-components.module.css";
import clsx from "clsx";

export default function Register() {
    let defaultFormData = {
        name: "",
        surname: "",
        patronymic: "",
        email: "",
        phoneNumber: "",
        country: "UA",
        dateOfBirth: "",
        username: "",
        password: "",
        passwordAgain: "",
        profession: "",
    }

    let [formData, setFormData] = useState(defaultFormData);

    let setValue = (label) => (value) => {
        setFormData({
            ...formData,
            [label]: value
        })
    }

    let [state, formAction, pending] = useActionState(async () => {
    }, {})

    return (
        <form action={formAction} className={styles.Registration}>
            <div className={styles.group}>
                <div className={styles.inputGroup}>
                    <Input staticLabels={true} type="text" value={formData["surname"]} setValue={setValue("surname")}
                           label={<>Прізвище <span style={{color: "#FF0000"}}>*</span></>}
                           attributes={{
                               placeholder: "Прізвище",
                               name: "surname",
                               "aria-describedby": "surname-error"
                           }}
                    />
                    <div className={styles.alarm} id="surname-error" aria-live="polite" aria-atomic="true"></div>
                </div>
                <div className={styles.inputGroup}>
                    <Input staticLabels={true} type="text" value={formData["name"]} setValue={setValue("name")}
                           label={<>Ім&apos;я <span style={{color: "#FF0000"}}>*</span></>}
                           attributes={{
                               placeholder: "Ваше чудове ім'я",
                               name: "name",
                               "aria-describedby": "name-error"
                           }}
                    />
                    <div className={styles.alarm} id="name-error" aria-live="polite" aria-atomic="true"></div>
                </div>
                <div className={styles.inputGroup}>
                    <Input staticLabels={true} type="text" value={formData["patronymic"]}
                           setValue={setValue("patronymic")}
                           label={<>По-батькові <span style={{color: "#FF0000"}}>*</span></>}
                           attributes={{
                               placeholder: "Ваш батько так називався",
                               name: "patronymic",
                               "aria-describedby": "patronymic-error"
                           }}
                    />
                    <div className={styles.alarm} id="patronymic-error" aria-live="polite" aria-atomic="true"></div>
                </div>
            </div>
            <div className={styles.inputGroup}>
                <Input staticLabels={true} type="text" value={formData["phoneNumber"]}
                       setValue={setValue("phoneNumber")}
                       label={<>Номер телефону <span style={{color: "#FF0000"}}>*</span></>}
                       attributes={{
                           placeholder: "+380XXXXXXXXX",
                           name: "phoneNumber",
                           "aria-describedby": "phoneNumber-error"
                       }}
                />
                <div className={styles.alarm} id="phoneNumber-error" aria-live="polite" aria-atomic="true"></div>
            </div>
            <div className={styles.inputGroup}>
                <Datepick value={formData["dateOfBirth"]} changer={setValue("dateOfBirth")}
                          label={<>Дата народження <span style={{color: "#FF0000"}}>*</span></>}
                          attributes={{
                              name: "dateOfBirth",
                              "aria-describedby": "dateOfBirth-error"
                          }}
                />
                <div className={styles.alarm} id="dateOfBirth-error" aria-live="polite" aria-atomic="true"></div>
            </div>
            <div className={styles.inputGroup}>
                <Input staticLabels={true} type="password" value={formData["password"]} setValue={setValue("password")}
                       label={<>Пароль <span style={{color: "#FF0000"}}>*</span></>}
                       attributes={{
                           placeholder: "Введіть пароль",
                           name: "password",
                           "aria-describedby": "password-error"
                       }}
                />
                <div className={styles.alarm} id="password-error" aria-live="polite" aria-atomic="true"></div>
            </div>
            <div className={styles.inputGroup}>
                <Input staticLabels={true} type="password" value={formData["passwordAgain"]}
                       setValue={setValue("passwordAgain")}
                       label={<>Повторити пароль <span style={{color: "#FF0000"}}>*</span></>}
                       attributes={{
                           placeholder: "Пароль ще раз",
                           name: "passwordAgain",
                           "aria-describedby": "passwordAgain-error"
                       }}
                />
                <div className={styles.alarm} id="passwordAgain-error" aria-live="polite" aria-atomic="true"></div>
            </div>
            <div className={styles.inputGroup}>
                <Input staticLabels={true} type="text" value={formData["email"]} setValue={setValue("email")}
                       label={<>Email <span style={{color: "#FF0000"}}>*</span></>}
                       attributes={{
                           placeholder: "example@gmail.com",
                           name: "email",
                           "aria-describedby": "email-error"
                       }}
                />
                <div className={styles.alarm} id="email-error" aria-live="polite" aria-atomic="true"></div>
            </div>
            <div className={styles.inputGroup}>
                <Input staticLabels={true} type="text" value={formData["username"]} setValue={setValue("username")}
                       label={<>Псевдонім <span style={{color: "#FF0000"}}>*</span></>}
                       attributes={{
                           placeholder: "Відображатиметься іншим користувачам на сайті",
                           name: "username",
                           "aria-describedby": "username-error"
                       }}
                />
                <div className={styles.alarm} id="username-error" aria-live="polite" aria-atomic="true"></div>
            </div>
            <div className={styles.inputGroup}>
                <Input staticLabels={true} type="text" value={formData["profession"]} setValue={setValue("profession")}
                       label="Професія"
                       attributes={{
                           placeholder: "Мамина гордість",
                           name: "profession",
                           "aria-describedby": "profession-error"
                       }}
                />
                <div className={styles.alarm} id="profession-error" aria-live="polite" aria-atomic="true"></div>
            </div>
            <button disabled={pending} className={clsx(styles.button, prestyle.buttonFilled)} type="submit">
                Зареєструватись
            </button>
        </form>
    )
}
