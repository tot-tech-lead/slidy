"use client"

import logo from "@/public/assets/SVG/logo.svg"

import React, {useEffect} from "react";
import {usePathname, useRouter} from "next/navigation";

import Link from "next/link"
import {gsap} from "gsap";

import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useAppDispatch, useAppSelector} from "@/app/lib/hooks";
import {show, hide} from "@/app/lib/features/burger/burger";

import Image from "next/image";
import preStyle from "@/app/lib/ui-components.module.css"
import styles from "./header.module.css"

import clsx from "clsx";

import AuthBlock from "@/app/ui/page-elements/header/authBlock";
import {nunitoSans} from "@/app/ui/fonts";
import {logIn, setData} from "@/app/lib/features/auth/auth";
import {useCookies} from 'next-client-cookies';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    let dispatch = useAppDispatch()
    let router = useRouter()
    let isBurgerShown = useAppSelector(state => state.burger.isShown)
    let auth = useAppSelector(state => state.auth);

    let location = usePathname()
    let cookies = useCookies()

    useEffect(() => {
        gsap.set(`.${styles.burgerBtnBullet}`, {
            transform: "translateY(var(--own-offset)) rotate(0)",
        })
        gsap.set(`.${styles.burgerBtnBullet}:nth-child(2)`, {
            opacity: 1,
        })
    }, [])

    useEffect(() => {
        let token = cookies.get("TOKEN");

        if (token) {
            dispatch(logIn())
        }
    }, [cookies.get("TOKEN")]);


    useEffect(() => {
        if (auth.isLogin && typeof window !== "undefined") {
            let fetchData = async () => {
                try {
                    const res = await fetch(`${window.location.origin}/api/user`, {
                        method: "GET",
                        credentials: "include",
                    });

                    const data = await res.json();

                    if (data.status === 200) {
                        dispatch(setData(data.body));
                    } else {
                        console.error("Failed to fetch data:", data);
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }

            fetchData()
        }
    }, [auth.isLogin]);

    useEffect(() => {
        let tl = gsap.timeline();

        if (isBurgerShown) {
            tl.to(`.${styles.burgerBtnBullet}`, {
                transform: "translateY(0)", duration: 0.1
            })
            tl.to(`.${styles.burgerBtnBullet}:nth-child(2)`, {
                opacity: 0, duration: 0.1,
            })
            tl.to(`.${styles.burgerBtnBullet}`, {
                transform: "translateY(var(--active-offset)) rotate(var(--own-ratio))", duration: 0.1
            })
        } else {
            tl.to(`.${styles.burgerBtnBullet}`, {
                transform: "translateY(var(--active-offset)) rotate(0)", duration: 0.1
            })
            tl.to(`.${styles.burgerBtnBullet}:nth-child(2)`, {
                opacity: 1, duration: 0.1,
            })
            tl.to(`.${styles.burgerBtnBullet}`, {
                transform: "translateY(var(--own-offset))", duration: 0.1
            })
        }
    }, [isBurgerShown]);


    useEffect(() => {
        gsap.from(`.${styles.burgerBtnBullet}`, {
            transform: "translateY(var(--own-offset))", duration: 0.1
        })
    }, [])

    let handleBurgerClick = () => {
        if (isBurgerShown) {
            dispatch(hide());
        } else {
            dispatch(show());
        }
        console.log(isBurgerShown);
    };


    return (
        <header className={clsx([styles.Header], {
            [styles.Header_active]: location == "/"
        })}>
            <Link href={"/"}>
                <Image src={logo.src}
                       height={50}
                       width={50}
                       alt="Сліди слайді сліді слійді слідв екскурсовод"
                       className={styles.logo}
                />
            </Link>

            <nav className={styles.navigation}>
                <ul className={styles.menu}>
                    {!location.includes("/auth") ? <>
                        <li className={styles.menuItem}>
                            <button onClick={() => router.push("/")}
                                    className={`${styles.menuItemLink} ${preStyle.textBig} ${nunitoSans.className}`}>Головна
                            </button>
                        </li>
                        <li className={styles.menuItem}>
                            <button onClick={() => router.push("/tours/all/all")}
                                    className={`${styles.menuItemLink} ${preStyle.textBig} ${nunitoSans.className}`}>Екскурсії
                            </button>
                        </li>
                    </> : ''}
                </ul>
            </nav>

            <div className={styles.rightPart}>
                {(auth.isLogin) ? <AuthBlock {...{...auth.data}} /> : <>
                    {!location.includes("/authorization/") && <>
                        <a
                            href={`/authorization/login`}
                            title={"slidy вхід"}
                            className={`${preStyle.buttonOutlined} ${styles.button} ${nunitoSans.className}`}
                            onClick={(e) => {
                                e.preventDefault();
                                router.push("/authorization/login")
                            }}
                        >
                            Вхід
                        </a>
                        <a className={`${preStyle.buttonFilled} ${styles.button} ${nunitoSans.className}`}
                           href={"/authorization/login"}
                           title={"slidy реєстрація"}
                           onClick={(e) => {
                               e.preventDefault();
                               router.push("/authorization/registration")
                           }}
                        >Реєстрація
                        </a>
                    </>}
                    <button className={styles.burgerBtn}
                            aria-label="Відкрити меню"
                            onClick={handleBurgerClick}
                    >
                        <span className={styles.burgerBtnBullet}></span>
                        <span className={styles.burgerBtnBullet}></span>
                        <span className={styles.burgerBtnBullet}></span>
                    </button>
                </>}
            </div>
        </header>
    )
}