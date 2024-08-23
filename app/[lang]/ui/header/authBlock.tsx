import styles from "@/app/[lang]/ui/header/header.module.css";
import Image from "next/image";
import defAvatar from "@/public/assets/SVG/default-avatar.svg";
import preStyle from "@/app/lib/ui-components.module.css";
import {roles} from "@/app/lib/data-define";
import {deleteCookie} from "@/app/lib/cookie-parser";
import React from "react";

import {useAuth} from "@/app/lib/hooks/useAuth";

import {useParams} from "next/navigation";
import {getLocale} from "@/app/lib/utils/getLocale";
import {Dict} from "@/app/[lang]/dictionaries";

export default function AuthBlock(
    {
        avatar,
        surname,
        name,
        role,
        t
    } : {
        avatar?: String,
        surname?: String,
        name?: String,
        role?: string
        t: Dict
    }
) {
    let logout = useAuth(state => state.deleteData)

    let {lang} = useParams()

    return (
        <>
            <div className={styles.loginData}>
                <Image height={50} width={50} src={avatar ? avatar : defAvatar}
                       alt={t.header.user}
                       className={styles.logo}/>

                <div className={styles.loginDataText}>
                    <p className={`${styles.loginText_bold} ${preStyle.textBigBold}`}>{surname} {name}</p>
                    <div className={`${styles.loginText} ${preStyle.textBig}`}>
                        {roles[role as keyof typeof roles][getLocale(lang)]}
                    </div>
                </div>
                <button className={preStyle.buttonOutlined} onClick={() => {
                    logout()
                    deleteCookie("TOKEN")
                }}>logout
                </button>
            </div>
        </>
    )
}