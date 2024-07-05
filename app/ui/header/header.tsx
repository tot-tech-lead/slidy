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
import preStyle from "@/app/ui/ui-components.module.css"
import styles from "./header.module.css"

import clsx from "clsx";

import AuthBlock from "@/app/ui/header/authBlock";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    let dispatch = useAppDispatch()
    let router = useRouter()
    let isBurgerShown = useAppSelector(state => state.burger)
    let auth = useAppSelector(state => state.auth);

    let location = usePathname()

    useEffect(() => {

        gsap.set(".styles.burger-btn-bullet", {
            transform: "translateY(var(--own-offset)) rotate(0)",
        })
        gsap.set(".styles.burger-btn-bullet:nth-child(2)", {
            opacity: 1,
        })
    }, [])

    useEffect(() => {
        let tl = gsap.timeline();

        if (isBurgerShown) {
            tl.to(".styles.burger-btn-bullet", {
                transform: "translateY(0)", duration: 0.1
            })
            tl.to(".styles.burger-btn-bullet:nth-child(2)", {
                opacity: 0, duration: 0.1,
            })
            tl.to(".styles.burger-btn-bullet", {
                transform: "translateY(var(--active-offset)) rotate(var(--own-ratio))", duration: 0.1
            })
        } else {
            console.log("else")
            tl.to(".styles.burger-btn-bullet", {
                transform: "translateY(var(--active-offset)) rotate(0)", duration: 0.1
            })
            tl.to(".styles.burger-btn-bullet:nth-child(2)", {
                opacity: 1, duration: 0.1,
            })
            tl.to(".styles.burger-btn-bullet", {
                transform: "translateY(var(--own-offset))", duration: 0.1
            })
        }
    }, [isBurgerShown]);


    useEffect(() => {
        gsap.from(".styles.burger-btn-bullet", {
            transform: "translateY(var(--own-offset))", duration: 0.1
        })
    }, [])

    let handleBurgerClick = () => {
        if (isBurgerShown) {
            dispatch(hide())
        } else {
            dispatch(show())
        }
        console.log(isBurgerShown)
    }


    return (<header className={clsx([styles.Header], {
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
                                className={`${styles.menuItemLink} ${preStyle.textBig}`}>Головна
                        </button>
                    </li>
                    <li className={styles.menuItem}>
                        <button onClick={() => router.push("/tours/all/all")}
                                className={`${styles.menuItemLink} ${preStyle.textBig}`}>Екскурсії
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
                        className={`${preStyle.buttonOutlined}`}
                        onClick={(e) => {
                            e.preventDefault();
                            router.push("/authorization/login")
                        }}
                    >
                        Вхід
                    </a>
                    <a className={`${preStyle.buttonFilled}`}
                       href={"/authorization/login"}
                       title={"slidy реєстрація"}
                       onClick={(e) => {
                           e.preventDefault();
                           router.push("/authorization/registration")
                       }}
                    >Реєстрація
                    </a>
                </>}
                <button className={styles.burgerBtn} aria-label="Відкрити меню"
                        onClick={handleBurgerClick}>
                    <span className={styles.burgerBtnBullet}></span>
                    <span className={styles.burgerBtnBullet}></span>
                    <span className={styles.burgerBtnBullet}></span>
                </button>
            </>}
        </div>
    </header>)
}