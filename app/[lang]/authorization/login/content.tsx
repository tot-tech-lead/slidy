"use client"

import Input from "@/app/[lang]/ui/input/input";
import styles from "./login.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import {useActionState, useEffect, useState} from "react";
import clsx from "clsx";
import {login, State} from "@/app/lib/action/authorization";
import {useAuth} from "@/app/lib/hooks/useAuth";
import {Dict} from "@/app/[lang]/dictionaries";

let defaultFormData = {
    loginData: "",
    password: ""
}

export default function Login({t, errorT}: { t: Dict, errorT: Dict }) {
    let [formData, setFormData] = useState(defaultFormData);

    let updateAuthData = useAuth(state => state.update)

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
            updateAuthData()
        }
    }, [state, updateAuthData]);

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
                       {t.loginField} <span style={{color: "#FF0000"}}>*</span>
                       </>}
                       attributes={{
                           name: "login",
                           "aria-describedby": "login-error"
                       }}
                />
                <div className={styles.alarm} id="login-error" aria-live="polite" aria-atomic="true">
                    {
                        (state?.status !== 200 && state?.errors?.login) ? state?.errors?.login.map(err => errorT[err] ? errorT[err] : err).join(", ") : ""
                    }
                </div>
            </div>
            <div className={styles.inputGroup}>
                <Input staticLabels={true} type="password" value={formData["password"]} setValue={setValue("password")}
                       label={<>
                       {t.password} <span style={{color: "#FF0000"}}>*</span>
                       </>}
                       attributes={{
                           name: "password",
                           "aria-describedby": "password-error"
                       }}
                />
                <div className={styles.alarm} id="password-error" aria-live="polite" aria-atomic="true">
                    {
                        (state?.status !== 200 && state?.errors?.password) ? state?.errors?.password.map(err => errorT[err] ? errorT[err] : err).join(", ") : ""
                    }
                </div>
            </div>

            <button disabled={pending} className={clsx(styles.button, prestyle.buttonFilled)}
                    type="submit"
            >
                {t.loginAction}
            </button>
        </form>
    )
}
