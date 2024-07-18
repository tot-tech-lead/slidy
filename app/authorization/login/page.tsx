"use client"


import Input from "@/app/ui/input/input";
import styles from "./login.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import {useActionState, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {useAppDispatch} from "@/app/lib/hooks";
import clsx from "clsx";
import {login, State} from "@/app/lib/action/authorization";
import {sendMessageToTelegram} from "@/app/lib/action/bot";

let defaultFormData = {
    loginData: "",
    password: ""
}

export default function Login() {
    let dispatch = useAppDispatch();
    let router = useRouter();

    let [formData, setFormData] = useState(defaultFormData);

    let setValue = (label: string) => (value: any) => {
        setFormData({
            ...formData,
            [label]: value
        })
    }

    let defState: State = {
        errors: {},
        message: null
    }

    let [state, formAction, pending] = useActionState(login, defState);

    useEffect(() => {
        if (state?.status === 200) {
            alert("Ви успіщно увійшли")
        }
    }, [state]);

    return (
        <form action={formAction} className={styles.Login}>
            <div className={styles.alarm} id="login-error" aria-live="polite" aria-atomic="true">
                {
                    (state?.status !== 200 && state?.errors?.manual) ? state?.errors?.manual + "\n" + state?.message : ""
                }
            </div>
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
                <div className={styles.alarm} id="login-error" aria-live="polite" aria-atomic="true">
                    {
                        (state?.status !== 200 && state?.errors?.login) ? state?.errors?.login.join(", ") : ""
                    }
                </div>
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
                <div className={styles.alarm} id="password-error" aria-live="polite" aria-atomic="true">
                    {
                        (state?.status !== 200 && state?.errors?.password) ? state?.errors?.password.join(", ") : ""
                    }
                </div>
            </div>

            <button disabled={pending} className={clsx(styles.button, prestyle.buttonFilled)}
                    type="submit"
            >
                Увійти
            </button>
        </form>
    )
}
