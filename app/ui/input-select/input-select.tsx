"use client"

import styles from "./input-select.module.css"

import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import clearIcon from "./SVG/close.svg"
import Image from "next/image";
import clsx from "clsx";
import prestyle from "@/app/lib/ui-components.module.css";

import skeleton from "@/public/assets/SVG/gray-bg-static.svg"

interface Attribute {
    [name: string]: any
}

function InputSelect(
    {
        data,
        value,
        setValue,
        label,
        staticLabel = false,
        withIcon = false,
        iconPattern = '',
        attributes = {}

    }: {
        data: string[],
        value: string | number,
        setValue: (value: string) => void,
        label: string | React.ReactNode,
        staticLabel?: boolean,
        withIcon?: boolean,
        iconPattern?: string
        attributes?: Attribute
    }
) {
    let optionInput = useRef<HTMLInputElement>(null)
    let [options, setOptions] = useState<Array<string>>([]);
    let [link, setLink] = useState<null | string>(null)

    let id = useMemo(() => Math.floor(Date.now() + Math.random() * 100000), [])
    useEffect(() => {
        if (!staticLabel) {
            if (value) {
                if (String(value).length > 0) {
                    let label = document.querySelector<HTMLElement>(`.InputSelect${id} .${styles.label}`);

                    if (label) {
                        label.style.top = "-3px";
                        label.style.fontSize = "10px";
                        label.style.color = "#333333"
                    }
                } else {
                    let label = document.querySelector(`.InputSelect${id} .${styles.label}`)

                    if (label) {
                        label.removeAttribute("style")
                    }
                }
            }
        }
    }, [id, value, staticLabel]);

    const inputFocusHandler = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        if (!staticLabel) {
            let label = e.target.parentElement?.parentElement?.querySelector<HTMLElement>(`.InputSelect${id} .${styles.label}`);
            if (label) {
                label.style.top = "-3px";
                label.style.fontSize = "10px";
                label.style.color = "#333333"
            }
        }
    }, [id, staticLabel])

    let inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
            setOptions([])
        } else {
            let filtered: string[] = data.filter(item => new RegExp(e.target.value, "gi").test(item))
            setOptions(filtered)
        }
        setValue(e.target.value)
    }

    let inputBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!staticLabel) {
            if (e.target.value === "") {
                let label = e.target.parentElement?.parentElement?.querySelector<HTMLElement>(`.InputSelect${id} .${styles.label}`)

                if (label) {
                    label.removeAttribute("style")
                }
            }
            if (optionInput.current) {
                if (!data.includes(optionInput.current.value)) {
                    setValue("")
                } else {
                    setOptions([])
                }
            }
        }
    }

    useEffect(() => {
        if (iconPattern) {
            let arr = iconPattern.split("%%pattern%%");

            let newLink = [arr[0], String(value).split(" - ")[0], arr[1]].join("")
            setLink(newLink)
        }
    }, [iconPattern, value]);

    return (
        <div className={clsx(`${styles.InputSelect}`, `InputSelect${id}`, {
            [styles.InputSelect_staticLabel]: staticLabel
        })}>
            <label htmlFor={`InputLabel${id}`}
                   className={clsx(styles.label, {
                       [prestyle.textPlain]: !staticLabel,
                       [prestyle.textBold]: staticLabel,
                   })}>
                {label}
            </label>
            <div className={styles.group}>
                {
                    (withIcon && link) &&
                    <Image src={link}
                           className={clsx(styles.icon)}
                           alt="icon"
                           width={28}
                           height={16}
                           onError={() => setLink(skeleton)}
                    />
                }
                <input onBlur={inputBlurHandler}
                       id={`InputLabel${id}`}
                       onFocus={inputFocusHandler}
                       value={value} ref={optionInput}
                       onInput={inputHandle}
                       type="text"
                       className={clsx(styles.input, prestyle.textPlain)}
                       {...{...attributes}}
                />
                <button onClick={() => {
                    setValue("")
                    setOptions(data)
                }}
                        className={styles.btn}
                        type='button'
                >
                    <Image height={20} width={20}
                           src={clearIcon}
                           alt="очистити"
                           className={styles.btnIcon}/>
                </button>
            </div>
            <div className={styles.options}>
                {
                    options.map((item, idx) =>
                        <div onClick={() => {
                            setValue(item)
                            setOptions([])
                        }} key={idx} className={styles.option}>
                            {item !== "" ? item : "очистити"}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default InputSelect