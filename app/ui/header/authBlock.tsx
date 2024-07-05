import styles from "@/app/ui/header/header.module.css";
import Image from "next/image";
import defAvatar from "@/public/assets/SVG/default-avatar.svg";
import preStyle from "@/app/ui/ui-components.module.css";
import {roles} from "@/app/lib/data-define";
import {deleteCookie} from "@/app/lib/cookie-parser";
import React from "react";

import {useAppDispatch} from "@/app/lib/hooks";

export default function AuthBlock(
    {
        avatar,
        surname,
        name,
        role
    } : {
        avatar?: String,
        surname?: String,
        name?: String,
        role?: string
    }
) {
    let dispatch = useAppDispatch()

    return (
        <>
            <div className={styles.avatar}>
                <Image height={50} width={50} src={avatar ? avatar : defAvatar}
                       alt="користувач"
                       className={styles.logo}/>

                <div className={styles.loginDataText}>
                    <p className={`${styles.loginText_bold} ${preStyle.textBigBold}`}>{surname} {name}</p>
                    <div className={`${styles.loginText} ${preStyle.textBig}`}>{roles[role as keyof typeof roles]}</div>
                </div>
                <button className={preStyle.buttonOutlined} onClick={() => {
                    dispatch({type: "auth/set-log-out"})
                    deleteCookie("TOKEN")
                }}>logout
                </button>
            </div>
        </>
    )
}