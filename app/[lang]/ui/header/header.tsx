"use client"

import logo from "@/public/assets/SVG/logo.svg"

import React, {useEffect} from "react";
import {useParams, usePathname, useRouter} from "next/navigation";

import Link from "next/link"
import {gsap} from "gsap";

import {ScrollTrigger} from "gsap/ScrollTrigger";

import Image from "next/image";
import preStyle from "@/app/lib/ui-components.module.css"
import styles from "./header.module.css"

import clsx from "clsx";

import AuthBlock from "./authBlock";
import {nunitoSans} from "@/app/[lang]/ui/fonts";
import {useAuth} from "@/app/lib/hooks/useAuth";
import {Dict} from "@/app/[lang]/dictionaries";

gsap.registerPlugin(ScrollTrigger);

export default function Header(
    {t}: { t: Dict }
) {
    let router = useRouter()
    let auth = useAuth(state => state.auth)

    let location = usePathname()
    let {lang} = useParams();

    let updateData = useAuth(state => state.update)

    useEffect(() => {
        if (!auth.isLogin) {
            updateData()
        }
    }, [updateData, auth.isLogin]);

    useEffect(() => {
        let handleResize = () => {
            let header = document.querySelector<HTMLElement>(`.${styles.Header}`)

            if (!header) return

            header.style.display = window.innerWidth > 800 ? "flex" : "none"
        }

        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize)
        }

        return () => {
            if (typeof window !== "undefined") {
                window.removeEventListener("resize", handleResize)
            }
        }
    }, []);


    return (
        <header className={clsx([styles.Header], {
            [styles.Header_active]: location == `/${lang}`
        })}>
            <Link href={`/${lang}`}>
                <Image src={logo.src}
                       height={50}
                       width={50}
                       alt="Сліди"
                       className={styles.logo}
                />
            </Link>

            <nav className={styles.navigation}>
                <ul className={styles.menu}>
                    {!location.includes("/auth") ? <>
                        <li className={styles.menuItem}>
                            <button onClick={() => router.push(`/${lang}`)}
                                    className={`${styles.menuItemLink} ${preStyle.textBig} ${nunitoSans.className}`}>
                                {t.header.home}
                            </button>
                        </li>
                        <li className={styles.menuItem}>
                            <button onClick={() => router.push(`/${lang}/tours/all/all`)}
                                    className={`${styles.menuItemLink} ${preStyle.textBig} ${nunitoSans.className}`}>
                                {t.header.tours}
                            </button>
                        </li>
                    </> : ''}
                </ul>
            </nav>

            <div className={styles.rightPart}>
                {(auth.isLogin) ? <AuthBlock {...{...auth.data}} t={t} /> : <>
                    {!location.includes("/authorization/") && <>
                        <a
                            href={`${lang}/authorization/login`}
                            title={`slidy ${t.header.login}}`}
                            className={`${preStyle.buttonOutlined} ${styles.button} ${nunitoSans.className}`}
                            onClick={(e) => {
                                e.preventDefault();
                                router.push(`/${lang}/authorization/login`)
                            }}
                        >
                            {t.header.login}
                        </a>
                        <a className={`${preStyle.buttonFilled} ${styles.button} ${nunitoSans.className}`}
                           href={`${lang}/authorization/login`}
                           title={`slidy ${t.header.signup}`}
                           onClick={(e) => {
                               e.preventDefault();
                               router.push(`/${lang}/authorization/registration`)
                           }}
                        >
                            {t.header.signup}
                        </a>
                    </>}
                </>}
            </div>
        </header>
    )
}