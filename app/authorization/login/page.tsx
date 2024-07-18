"use client"


import Input from "@/app/ui/input/input";
import styles from "./login.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import {useActionState, useState} from "react";
import {useRouter} from "next/navigation";
import {useAppDispatch} from "@/app/lib/hooks";
import clsx from "clsx";

let defaultFormData = {
    loginData: "",
    password: ""
}

export default function Login() {
    let dispatch = useAppDispatch();
    let router = useRouter();

    let [formData, setFormData] = useState(defaultFormData);

    let setValue = label => value => {
        setFormData({
            ...formData,
            [label]: value
        })
    }

    let [state, formAction, pending] = useActionState(async () => {
    }, {})

    return (
        <form action={formAction} className={styles.Login}>
            <div className={styles.inputGroup}>
                <Input staticLabels={true} type="text" value={formData["loginData"]} setValue={setValue("loginData")}
                       label={<>
                           Псевдонім / email / номер телефону <span style={{color: "#FF0000"}}>*</span>
                       </>}
                       attributes={{
                           name: "login",
                           "aria-describedby": "login-error"
                       }}
                />
                <div className={styles.alarm} id="login-error" aria-live="polite" aria-atomic="true"></div>
            </div>
            <div className={styles.inputGroup}>
                <Input staticLabels={true} type="password" value={formData["password"]} setValue={setValue("password")}
                       label={<>
                           Пароль <span style={{color: "#FF0000"}}>*</span>
                       </>}
                       attributes={{
                           name: "password",
                           "aria-describedby": "password-error"
                       }}
                />
                <div className={styles.alarm} id="password-error" aria-live="polite" aria-atomic="true"></div>
            </div>

            <button disabled={pending} className={clsx(styles.button, prestyle.buttonFilled)}
                    type="submit"
            >
                Увійти
            </button>
        </form>
    )
}
