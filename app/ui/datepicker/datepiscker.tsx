"use client"

import "./datepicker-static.css"

import styles from "./datepicker.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import DatePicker, {registerLocale} from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import uk from 'date-fns/locale/uk';
import React from "react";
import clsx from "clsx";

registerLocale('uk', uk);


export default function Datepick({value, changer, label}: {
    value: string | Date,
    changer: Function,
    label: string | React.ReactNode
}) {
    let date = new Date(value).toString() === "Invalid Date" ? new Date(Date.now()) : new Date(value)
    return (
        date ? <div className={clsx(styles.Datepick, "Datepick")}>
            <label className={styles.Datepick__label}>{label}</label>
            <DatePicker selected={date}
                        onChange={changer} locale="uk"
                        placeholderText="дд/мм/рррр" className={clsx(styles.Datepick__dateField, prestyle.textPlain)}
                        dateFormat="dd/MM/yyyy"
                        autoComplete="off"
                        customInput={
                            <input autoComplete={"off"} type="text"
                                   className={styles.Datepick__dateField}/>
                        }/>
        </div> : ""
    )
}