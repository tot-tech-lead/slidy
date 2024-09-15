'use client'

import styles from "./mobile-menu.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import homeIconFilled from "./SVG/filled-menu-items/home.svg"
import homeIconOutlined from "./SVG/outlined-menu-items/home.svg"

import messagesIconFilled from "./SVG/filled-menu-items/messages.svg"
import messagesIconOutlined from "./SVG/outlined-menu-items/messages.svg"

import tripsIconFilled from "./SVG/filled-menu-items/trips.svg"
import tripsIconOutlined from "./SVG/outlined-menu-items/trips.svg"

import profileIconFilled from "./SVG/filled-menu-items/profile.svg"
import profileIconOutlined from "./SVG/outlined-menu-items/profile.svg"

import searchIcon from "./SVG/search.svg"


import Link from "next/link";
import Image from "next/image";

import {useParams, usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {Dict} from "@/app/[lang]/dictionaries";


function MenuItem({path, iconOutlined, iconFilled, label}: {
    path: string,
    iconOutlined: string | StaticImport,
    iconFilled: string | StaticImport,
    label: string
}) {
    const [isActive, setIsActive] = useState(false)

    let pathname = usePathname()

    let {lang} = useParams()

    useEffect(() => {
        console.log(`/${lang}${path}`)
        if (pathname === `/${lang}${path}` || pathname === `/${lang}${path}/` || pathname === `/${lang}${path.slice(1)}`) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [pathname, path]);

    return <Link href={`/${lang}${path}`} className={styles.menuItem}>
        <Image src={isActive ? iconFilled : iconOutlined}
               alt={`${label} іконка`}
               className={styles.menuItemIcon}
        />
        <p className={prestyle.textSmallSemiVisible}>{label}</p>
    </Link>
}


export default function MobileMenu({t}: { t: Dict }) {
    return (
        <nav className={styles.mobileMenu}>
            <MenuItem path={"/"}
                      iconOutlined={homeIconOutlined}
                      iconFilled={homeIconFilled}
                      label={t.home}/>
            <MenuItem path={"/chat"}
                      iconOutlined={messagesIconOutlined}
                      iconFilled={messagesIconFilled}
                      label={t.chat}/>
            <Link href={'/tours/all/all'} className={styles.searchButton} aria-label={t.searchLabel}>
                <Image src={searchIcon}
                       alt={t.search}
                       className={styles.searchButtonIcon}
                />
            </Link>
            <MenuItem path={"/profile/trips"}
                      iconOutlined={tripsIconOutlined}
                      iconFilled={tripsIconFilled}
                      label={t.trips}/>
            <MenuItem path={"/profile"}
                      iconOutlined={profileIconOutlined}
                      iconFilled={profileIconFilled}
                      label={t.cabinet}/>
        </nav>
    )
}