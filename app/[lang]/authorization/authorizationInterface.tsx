"use client"

import Switch from "@/app/[lang]/ui/switch/switch";
import styles from "@/app/[lang]/authorization/layout.module.css";
import clsx from "clsx";
import prestyle from "@/app/lib/ui-components.module.css";
import {nunito, nunitoSans} from "@/app/[lang]/ui/fonts";
import {useParams, usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {Dict} from "@/app/[lang]/dictionaries";

export default function AuthorizationInterface({t}: {t: Dict}){
    let router = useRouter();
    let location = usePathname();

    let {lang} = useParams()

    let [tab, setTab] = useState("");

    useEffect(() => {
        setTab(
            location === `/${lang}/authorization/login` ? t.login : t.signUp
        )
    }, [lang]);

    useEffect(() => {
        switch (tab) {
            case t.login:
                router.push("/authorization/login")
                break;
            case t.signUp:
                router.push("/authorization/registration")
                break;
        }
    }, [tab, router]);

    useEffect(() => {
        switch (location) {
            case "/authorization/login":
                setTab(t.login)
                break;
            case "/authorization/registration":
                setTab(t.signUp)
                break;
        }
    }, [location]);

    return (
        <>
            <Switch setCurrentTab={setTab} values={[t.login, t.signUp]} currentTab={tab}/>

            <div className={styles.headlineGroup}>
                <h2 className={clsx(styles.headline, prestyle.textH2, nunito.className)}>
                    {
                        location.includes("/authorization/registration") ?
                            t.signUp : t.login
                    }
                </h2>
                <p className={clsx(styles.subHeadline, prestyle.textBigBold, nunitoSans.className)}>
                    {t.requiredField} - <span style={{color: "#FF0000"}}>*</span>
                </p>
            </div>
        </>
    )
}