"use client"

import styles from "./input-select.module.css"

import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import clearIcon from "./SVG/close.svg"
import Image from "next/image";


function InputSelect(
    {
        data,
        value,
        setValue,
        label
    }: {
        data: string[],
        value: string | number,
        setValue: (value: string) => void,
        label: string
    }
) {
    let optionInput = useRef<HTMLInputElement>(null)
    let [options, setOptions] = useState<Array<string>>([])

    let id = useMemo(() => Math.floor(Date.now() + Math.random() * 100000), [])
    useEffect(() => {
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
    }, [id, value]);

    const inputFocusHandler = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        let label = e.target.parentElement?.parentElement?.querySelector<HTMLElement>(`.InputSelect${id} .${styles.label}`);
        if (label) {
            label.style.top = "-3px";
            label.style.fontSize = "10px";
            label.style.color = "#333333"
        }
    }, [id])

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
    return (
        <div className={`${styles.InputSelect} InputSelect${id}`}>
            <label htmlFor={`InputLabel${id}`}
                   className={styles.label}>{label}</label>
            <div className={styles.group}>
                <input onBlur={inputBlurHandler}
                       id={`InputLabel${id}`}
                       onFocus={inputFocusHandler}
                       value={value} ref={optionInput}
                       onInput={inputHandle}
                       type="text"
                       className={styles.input}/>
                <button onClick={() => {
                    setValue("")
                    setOptions(data)
                }} className={styles.btn}>
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