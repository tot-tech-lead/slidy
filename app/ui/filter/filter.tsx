"use client"

import styles from "./filter.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import {useEffect, useState} from "react";
import {useSearchParams, usePathname, useRouter} from "next/navigation";
import {useDebouncedCallback} from 'use-debounce';
import Image from "next/image";

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import clsx from "clsx";
import gsap from "gsap"

import Input from "@/app/ui/input/input";
import InputSelect from "@/app/ui/input-select/input-select";

import filterIcon from "./SVG/filter.svg"
import checkicon from "./SVG/check.svg"


interface FilterItem {
    type: "text" | "select" | "number",
    name: string,
    label: string,
    data?: string[],
    defValue?: string | number,
}


export default function Filter(
    {
        filters,
    }: {
        filters: FilterItem[]
    }
) {
    let searchParams = useSearchParams()
    let pathname = usePathname()
    let {replace} = useRouter()

    let [opened, setOpened] = useState(false)
    let [state, setState] = useState(()=>{
        let defaultState = Object.fromEntries(
            filters.map(filter => {
                let value = filter.defValue;

                if (!value) {
                    value = ""
                }

                return [filter.name, value]
            })
        )

        let params = new URLSearchParams(searchParams)

        for (let key in defaultState) {
            params.set(key, String(defaultState[key]))
        }

        if (typeof window !== 'undefined') {
            replace(`${pathname}?${params.toString()}`);
        }

        return defaultState
    });

    let handleChange = useDebouncedCallback((name: string, value: string) => {
        const params = new URLSearchParams(searchParams);
        if (name) {
            params.set(name, value);
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300)

    useEffect(() => {
        let tl = gsap.timeline()
        if (document.querySelector(`.${styles.Filter}`) && document.querySelector(`.${styles.Filter} .${styles.inputContainer} > div`)) {
            if (opened) {
                tl.set(`.${styles.Filter} .${styles.inputContainer} > div`, {
                    display: "flex"
                })
                tl.to(`.${styles.headline}`, {
                    opacity: 1,
                    duration: 0.3,
                })
                tl.to(`.${styles.Filter} .${styles.inputContainer} > div`, {
                    opacity: 1,
                    x: 0,
                    duration: 0.3,
                    stagger: 0.1,
                })
            } else {
                tl.to(`.${styles.Filter} .${styles.inputContainer} > div`, {
                    opacity: 0,
                    x: -10,
                    duration: 0.3,
                    stagger: -0.1,
                })
                tl.to(`.${styles.headline}`, {
                    opacity: 0,
                    duration: 0.3,
                })
                tl.set(`.${styles.Filter} .${styles.inputContainer} > div`, {
                    display: "none"
                })
            }
        }
    }, [opened])


    return (
        <div className={styles.Filter}>
            <h6 className={clsx(styles.headline, prestyle.textBigBold)}>Фільтри</h6>
            <Tippy className="Filter__tooltip" content={(opened ? "Приховати" : "Показати") + " фільтри"}>
                <button aria-label="відкрити фільтри"
                        onClick={() => setOpened(!opened)}
                        className={clsx(styles.btn, prestyle.buttonFilledWithImg)}
                >
                    <Image src={filterIcon} height={20} width={20} alt="фільтер" className={styles.btnIcon}/>
                </button>
            </Tippy>
            <div className={styles.inputContainer}>
                {
                    filters.map(field =>
                        field.type === "text" ? <>
                                <Input key={`${field.name}-text-${field.label}`} value={state[field.name]}
                                       setValue={(value: string) => {
                                           handleChange(field.name, value)
                                           setState({
                                               ...state,
                                               [field.name]: value
                                           })
                                       }}
                                       label={field.label}
                                       type="text"
                                />
                            </> :
                            (field.type === "select" && field.data) ?
                                <InputSelect
                                    key={`${field.name}-select-${field.label}`}
                                    value={state[field.name]}
                                    setValue={(value) => {
                                        handleChange(field.name, value)
                                        setState({
                                            ...state,
                                            [field.name]: value
                                        })
                                    }}
                                    label={field.label}
                                    data={field.data}
                                />
                                : ""
                    )
                }
            </div>
        </div>
    )
}