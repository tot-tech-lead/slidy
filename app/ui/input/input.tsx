import styles from "./input.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import viewIcon from "./SVG/show.svg"
import {useMemo, useCallback, useState, useEffect} from "react";

import Image from "next/image";
import clsx from "clsx";

interface Attribute {
    [name: string]: any
}

function Input(
    {
        label,
        value,
        setValue,
        type,
        maxLength,
        disabled = false,
        staticLabels = false,
        attributes = {}
    }: {
        label: string | JSX.Element | object,
        value: string | number,
        setValue: Function,
        type: string,
        maxLength: number | undefined | null,
        disabled?: boolean,
        staticLabels?: boolean,
        attributes?: Attribute
    }
) {
    let id = useMemo(() => Math.floor(Date.now() + Math.random() * 100000), [])
    let [show, setShow] = useState(false)

    useEffect(() => {
        if (!staticLabels) {
            if (value && String(value)?.length > 0) {
                let label = document.querySelector<HTMLElement>(`.Input${id} .${styles.label}`);

                if (label) {
                    label.style.top = "-3px";
                    label.style.fontSize = "10px";
                    label.style.color = "#333333"
                }
            } else {
                let el = document.querySelector<HTMLElement>(`.Input${id} .${styles.label}`)

                if (el) {
                    el.removeAttribute("style")
                }
            }
        }
        // eslint-disable-next-line
    }, [id, value, staticLabels]);

    let onChange = (e) => {
        if (maxLength) {
            if (e.target.value.length > maxLength) return
        }

        setValue(e.target.value)
    }

    const inputFocusHandler = useCallback((e) => {
        let label = e.target.parentElement.querySelector<HTMLElement>(`.Input${id} .${styles.label}`);

        if (label) {
            label.style.top = "-3px";
            label.style.fontSize = "10px";
            label.style.color = "#333333"
        }

    }, [id])

    const inputBlurHandler = useCallback((e) => {
        if (e.target.value === "") {
            let el = e.target.parentElement.querySelector<HTMLElement>(`.Input${id} .${styles.label}`)

            if (el) {
                el.removeAttribute("style")
            }
        }
    }, [id])

    const handlePasswordShow = () => {
        setShow(!show)
    }

    return (
        <div className={
            clsx(styles.Input, `Input${id}`, {
                [styles.Input_staticLabel]: staticLabels
            })
        }>
            <label htmlFor={`Input${id}`}
                   className={
                       clsx(styles.label, {
                           [prestyle.textBold]: staticLabels,
                           [prestyle.textPlain]: !staticLabels,
                       })
                   }
            >
                {label}
            </label>
            <input onChange={!disabled ? onChange : () => false}
                   onFocus={staticLabels ? () => {
                   } : inputFocusHandler}
                   onBlur={staticLabels ? () => {
                   } : inputBlurHandler}
                   value={value}
                   type={type === "password" ? show ? "text" : "password" : type}
                   id={`Input${id}`}
                   className={`${styles.field} ${prestyle.textPlain}`}
                   disabled={disabled}
                   key={id}
                   {...{...attributes}}
            />
            {
                type === "password" ?
                    <button onClick={handlePasswordShow} className={`${styles.showPassword}`}>
                        <Image height={25} width={25} src={viewIcon} alt="view"
                               className={`${styles.passwordShowIcon}`}/>
                    </button>
                    : ""
            }
            {
                maxLength ? <>
                    <div className={
                        clsx(
                            styles.limits,
                            prestyle.textSmallSemiVisible,
                            {
                                [styles.limits_red]: maxLength === String(value).length
                            }
                        )
                    }>
                        {String(value).length}/{maxLength}
                    </div>
                </> : ""
            }
        </div>
    )
}


export default Input