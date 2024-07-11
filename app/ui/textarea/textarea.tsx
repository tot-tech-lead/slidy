import styles from "./textarea.module.css"
import prestyle from "@/app/lib/ui-components.module.css";

import {useMemo, useCallback, useEffect} from "react";
import clsx from "clsx";

interface Attribute {
    [name: string]: any
}

function TextArea(
    {
        label,
        value,
        setValue,
        maxLength,
        disabled = false,
        staticLabels = false,
        attributes = {}
    }: {
        label: string | JSX.Element | object,
        value: string | number,
        setValue: Function,
        maxLength: number | undefined | null,
        disabled?: boolean,
        staticLabels?: boolean,
        attributes?: Attribute
    }
) {
    let id = useMemo(() => Math.floor(Date.now() + Math.random() * 100000), [])

    useEffect(() => {
        if (!staticLabels) {
            if (value && String(value)?.length > 0) {
                let label = document.querySelector<HTMLElement>(`.TextArea${id} .${styles.label}`);

                if (label) {
                    label.style.top = "-3px";
                    label.style.fontSize = "10px";
                    label.style.color = "#333333"
                }
            } else {
                let el = document.querySelector<HTMLElement>(`.TextArea${id} .${styles.label}`)

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
        let label = e.target.parentElement.querySelector<HTMLElement>(`.TextArea${id} .${styles.label}`);

        if (label) {
            label.style.top = "-3px";
            label.style.fontSize = "10px";
            label.style.color = "#333333"
        }
    }, [id])

    const inputBlurHandler = useCallback((e) => {
        if (e.target.value === "") {
            let el = e.target.parentElement.querySelector<HTMLElement>(`.TextArea${id} .${styles.label}`);

            if (el) {
                el.removeAttribute("style")
            }
        }
    }, [id])

    return (
        // <div className={`TextArea TextArea${id} ${staticLabels && "TextArea_static-label"}`}>
        <div className={clsx(styles.TextArea, `TextArea${id}`, {
            [styles.TextArea_staticLabel]: staticLabels
        })}>
            <label htmlFor={`TextArea${id}`}
                   className={
                       clsx(styles.label, {
                           [prestyle.textBold]: staticLabels,
                           [prestyle.textPlain]: !staticLabels,
                       })
                   }>{label}</label>
            <textarea onChange={!disabled ? onChange : () => false}
                      onFocus={staticLabels ? () => {
                      } : inputFocusHandler}
                      onBlur={staticLabels ? () => {
                      } : inputBlurHandler}
                      value={value}
                      id={`TextArea${id}`}
                      className={`${styles.field} ${prestyle.textPlain}`}
                      disabled={disabled}
                      key={id}
                      {...{...attributes}}
            > </textarea>
            {
                maxLength ? <>
                    <div
                        className={
                            clsx(
                                styles.limits,
                                prestyle.textSmallSemiVisible,
                                {
                                    [styles.limits_red]: maxLength === String(value).length
                                }
                            )
                        }>{String(value).length}/{maxLength}</div>
                </> : ""
            }
        </div>
    )
}

export default TextArea