"use client"

import React from "react";

import styles from "./footer.module.css"
import preStyle from "@/app/ui/ui-components.module.css"
import logo from "@/public/assets/SVG/logo.svg"

import instIcon from "./SVG/instagram.svg";
import facebookIcon from "./SVG/facebook.svg";
import xIcon from "./SVG/x.svg"
import mailIcon from "./SVG/mail.svg"
import tgIcon from "./SVG/telegram.svg"
import phoneIcon from "./SVG/phone.svg"
import Image from "next/image";

import {nunito} from "@/app/ui/fonts";

export default function Footer() {
    let handleScroll = (selector: string) => {
        return (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            let el = document.querySelector(selector);

            if (el) {
                let elementRect = el.getBoundingClientRect();
                let scrollPosition = window.scrollY || window.pageYOffset;
                let elementTop = elementRect.top + scrollPosition;

                window.scrollTo(0, elementTop - 100)
            }
        }
    }

    return (
        <footer className={styles.Footer}>
            <div className={`${styles.section}`}>
                <Image src={logo} alt="slidy logo" height={100} className={styles.logo}/>
                <div className={styles.infoGroup}>
                    <h3 className={`${styles.headline} ${preStyle.textH3} ${nunito.className}`}>Навігація по сайту</h3>
                    <div className={styles.infoItems}>
                        <a href="#Home-about-us" onClick={handleScroll("#Home-about-us")} className={`${styles.infoItem} ${preStyle.textBig}`}>Про нас</a>
                        <a href="#Home-MainContactForm" onClick={handleScroll("#Home-MainContactForm")} className={`${styles.infoItem} ${preStyle.textBig}`}>Контакти</a>
                        <a href="#Home-how-to-use" onClick={handleScroll("#Home-how-to-use")} className={`${styles.infoItem} ${preStyle.textBig}`}>Як користуватись</a>
                        <a href="#Home-preview-page" onClick={handleScroll("#Home-preview-page")} className={`${styles.infoItem} ${preStyle.textBig}`}>Головна</a>
                    </div>
                </div>
                <div className={styles.infoGroup}>
                    <h3 className={`${styles.headline} ${preStyle.textH3} ${nunito.className}`}>Ми у соц мережах</h3>
                    <div className={styles.infoItems}>
                        <a target="_blank" href="https://www.facebook.com/people/Slidy/61558889682163/"
                           className={`${styles.infoItem} ${preStyle.textBig}`}>
                            <Image src={facebookIcon} alt="facebook лого" width={35} height={35} className={styles.itemImage}/>
                            Facebook
                        </a>
                        <a target="_blank" href="https://www.instagram.com/slidy.space/" className={`${styles.infoItem} ${preStyle.textBig}`}>
                            <Image src={instIcon} alt="instagram лого" width={35} height={35} className={styles.itemImage}/>
                            Instagram
                        </a>
                        <a target="_blank" href="https://twitter.com/SlidySpace" className={`${styles.infoItem} ${preStyle.textBig}`}>
                            <Image src={xIcon} alt="twitter лого" width={35} height={35} className={styles.itemImage}/>
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.infoGroup}>
                    <div className={styles.infoItems}>
                        <a target="_blank" href="mailto:support@slidy.space"
                           className={`${styles.infoItem} ${preStyle.textBig}`}>
                            <Image src={mailIcon} alt="twitter лого" width={35} height={35} className={styles.itemImage}/>
                            support@slidy.space
                        </a>
                        <a target="_blank" href="tel:+380980240265"
                           className={`${styles.infoItem} ${preStyle.textBig}`}>
                            <Image src={phoneIcon} alt="twitter лого" width={35} height={35} className={styles.itemImage}/>
                            +38098******5
                        </a>
                        <a target="_blank" href="https://t.me/m/aKcQSBFRMDBi"
                           className={`${styles.infoItem} ${preStyle.textBig}`}>
                            <Image src={tgIcon} alt="twitter лого" width={35} height={35} className={styles.itemImage}/>
                            Telegram
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
