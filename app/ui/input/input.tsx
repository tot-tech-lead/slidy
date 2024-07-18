import styles from "./input.module.css"
import prestyle from "@/app/lib/ui-components.module.css"
import {nunitoSans} from "@/app/ui/fonts";

import viewIcon from "./SVG/show.svg"
import React, {useMemo, useCallback, useState, useEffect, ChangeEvent} from "react";

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
        label: string | JSX.Element | React.ReactNode,
        value: string | number,
        setValue: (value: string) => void,
        type: string,
        maxLength?: number | undefined | null,
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
                let label = document.querySelector<HTMLElement>(`#Input${id} .${styles.label}`);

                if (label) {
                    label.style.top = "-3px";
                    label.style.fontSize = "10px";
                    label.style.color = "#333333"
                }
            } else {
                let el = document.querySelector<HTMLElement>(`#Input${id} .${styles.label}`)

                if (el) {
                    el.removeAttribute("style")
                }
            }
        }
        // eslint-disable-next-line
    }, [id, value, staticLabels]);

    let onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (maxLength) {
            if (e.target.value.length > maxLength) return
        }

        setValue(e.target.value)
    }

    const inputFocusHandler = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        let parent: HTMLElement | null = e.target.parentElement;

        if (!parent) return

        let label = parent.querySelector<HTMLElement>(`label.${styles.label}`);

        if (label) {
            label.style.top = "-3px";
            label.style.fontSize = "10px";
            label.style.color = "#333333"
        }

    }, [])

    const inputBlurHandler = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value === "") {
            let parent = e.target.parentElement;
            if (!parent) return

            let label = parent.querySelector<HTMLElement>(`.${styles.label}`);

            if (label) {
                label.removeAttribute("style")
            }
        }
    }, [])

    const handlePasswordShow = () => {
        setShow(!show)
    }

    return (
        <div id={`Input${id}`}
             className={
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
                   className={`${styles.field} ${prestyle.textPlain} ${nunitoSans.className}`}
                   disabled={disabled}
                   key={id}
                   {...{...attributes}}
            />
            {
                type === "password" ?
                    <button onClick={handlePasswordShow} className={`${styles.showPassword}`} type="button">
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