"use client"

import {useRouter, usePathname} from "next/navigation";
import Switch from "@/app/ui/switch/switch";
import {useEffect, useState} from "react";

import styles from "./layout.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import clsx from "clsx";
import {nunito, nunitoSans} from "@/app/ui/fonts";
import {Metadata} from "next";

export default function AuthLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    let router = useRouter();
    let location = usePathname();
    let [tab, setTab] = useState(()=>{
        return location === "/authorization/login" ? "Вхід" : "Реєстрація"
    });

    useEffect(() => {
        switch (tab) {
            case "Вхід":
                router.push("/authorization/login")
                break;
            case "Реєстрація":
                router.push("/authorization/registration")
                break;
        }
    }, [tab, router]);

    useEffect(() => {
        switch (location) {
            case "/authorization/login":
                setTab("Вхід")
                break;
            case "/authorization/registration":
                setTab("Реєстрація")
                break;
        }
    }, [location]);


    return (
        <>
            <div className={styles.Authorization}>
                <div className={styles.wrapper}>
                    <Switch setCurrentTab={setTab} values={["Вхід", "Реєстрація"]} currentTab={tab}/>

                    <div className={styles.headlineGroup}>
                        <h2 className={clsx(styles.headline, prestyle.textH2, nunito.className)}>
                            {
                                location === "/authorization/registration" ?
                                    "Реєстрація" : "Вхід"
                            }
                        </h2>
                        <p className={clsx(styles.subHeadline, prestyle.textBigBold, nunitoSans.className)}>
                            Обов’язкове поле - <span style={{color: "#FF0000"}}>*</span>
                        </p>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}

