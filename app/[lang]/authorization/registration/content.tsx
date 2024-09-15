"use client";

import "./register.module.css"

import Datepick from "@/app/[lang]/ui/datepicker/datepiscker";
import Input from "@/app/[lang]/ui/input/input";
import {useActionState, useEffect, useState} from "react";
import styles from "./register.module.css";
import prestyle from "@/app/lib/ui-components.module.css";
import clsx from "clsx";

import {createUser, State} from "@/app/lib/action/authorization";
import {useRouter} from "next/navigation";
import InputSelect from "@/app/[lang]/ui/input-select/input-select";
import {countries} from "@/app/lib/data-define";
import {Dict} from "@/app/[lang]/dictionaries";

export default function Register({t, errorT}: {
    t: Dict,
    errorT: Dict,
}) {
    let router = useRouter()

    let defaultFormData = {
        name: "",
        surname: "",
        patronymic: "",
        email: "",
        phoneNumber: "",
        country: "",
        dateOfBirth: "",
        username: "",
        password: "",
        passwordAgain: "",
        profession: "",
    }

    let [formData, setFormData] = useState(defaultFormData);

    let setValue = (label: string) => (value: string | number | Date) => {
        setFormData({
            ...formData,
            [label]: value
        })
    }

    let defState: State = {
        errors: {},
        message: null
    }

    let [state, formAction, pending] = useActionState(createUser, defState)

    useEffect(() => {
        console.log(state)
        if (state?.status === 200) {
            alert("Зареєстровано успішно!")
            router.push("/authorization/login")
        }
    }, [state, router]);

    let setPhoneNumber = (country: string) => {
        let countryObject = countries.filter(item => item.code === country.split(" - ")[0])[0]
        if (countryObject) {
            return (value: string) => {
                // Clean up the input value by removing non-digit characters
                const cleanedNumber = value.replace(/\D/g, '');

                // Define the country code with a plus sign
                const countryCodeWithPlus = `+${countryObject.phoneCode}`;
                let formattedNumber = cleanedNumber;

                // Check if the number starts with the country code
                if (!cleanedNumber.startsWith(countryObject.phoneCode)) {
                    formattedNumber = `${countryObject.phoneCode}${cleanedNumber}`;
                }

                // Ensure the number does not exceed the expected length
                if (formattedNumber.length > countryObject.phoneCode.length + countryObject.numberLength) {
                    formattedNumber = formattedNumber.substring(0, countryObject.phoneCode.length + countryObject.numberLength);
                }

                // Set the formatted phone number
                setFormData({
                    ...formData,
                    phoneNumber: `+${formattedNumber}`
                });
            }
        }
        return () => {
        }
    }

    return (
        <form action={formAction} className={styles.Registration}>
            <div className={styles.group}>
                <div className={styles.inputGroup}>
                    <Input staticLabels={true} type="text" value={formData["surname"]} setValue={setValue("surname")}
                           label={<>{t.surname} <span style={{color: "#FF0000"}}>*</span></>}
                           attributes={{
                               placeholder: t.surname,
                               name: "surname",
                               "aria-describedby": "surname-error"
                           }}
                    />
                    <div className={styles.alarm} id="surname-error" aria-live="polite" aria-atomic="true">
                        {state?.status !== 200 && state?.errors?.surname ? state.errors.surname.map(err => errorT[err] ? errorT[err] : err).join(", ") : ""}
                    </div>
                </div>
                <div className={styles.inputGroup}>
                    <Input staticLabels={true} type="text" value={formData["name"]} setValue={setValue("name")}
                           label={<>{t.name} <span style={{color: "#FF0000"}}>*</span></>}
                           attributes={{
                               placeholder: t.namePlaceholder,
                               name: "name",
                               "aria-describedby": "name-error"
                           }}
                    />
                    <div className={styles.alarm} id="name-error" aria-live="polite" aria-atomic="true">
                        {state?.status !== 200 && state?.errors?.name ? state.errors.name.map(err => errorT[err] ? errorT[err] : err).join(", ") : ""}
                    </div>
                </div>
            </div>
            <div className={styles.inputGroup}>
                <InputSelect staticLabel={true}
                             value={formData["country"]}
                             setValue={setValue("country")}
                             label={<>
                                 {t.country} <span style={{color: "#FF0000"}}>*</span>
                             </>}
                             data={countries.map(country => country.code + " - " + country.localeUA)}
                             attributes={{
                                 placeholder: "UA",
                                 name: "country",
                                 "aria-describedby": "country-error"
                             }}
                             withIcon={true}
                             iconPattern={"https://flagsapi.com/%%pattern%%/flat/32.png"}
                />
                <div className={styles.alarm} id="country-error" aria-live="polite" aria-atomic="true">
                    {state?.status !== 200 && state?.errors?.country ? state.errors.country.map(err => errorT[err] ? errorT[err] : err).join(", ") : ""}
                </div>
            </div>
            <div className={styles.inputGroup}>
                <Input staticLabels={true} type="text" value={formData["phoneNumber"]}
                       setValue={formData.country ? setPhoneNumber(formData.country) : (value) => {
                       }}
                       label={<>{t.phone} <span style={{color: "#FF0000"}}>*</span></>}
                       disabled={formData.country.length < 4}
                       attributes={{
                           placeholder: "+380XXXXXXXXX",
                           name: "phoneNumber",
                           "aria-describedby": "phoneNumber-error"
                       }}
                />
                <div className={styles.alarm} id="phoneNumber-error" aria-live="polite" aria-atomic="true">
                    {state?.status !== 200 && state?.errors?.phoneNumber ? state.errors.phoneNumber.map(err => errorT[err] ? errorT[err] : err).join(", ") : ""}
                </div>
            </div>
            <div className={styles.inputGroup}>
                <Datepick value={formData["dateOfBirth"]} changer={setValue("dateOfBirth")}
                          label={<>{t.dateOfBirth} <span style={{color: "#FF0000"}}>*</span></>}
                          attributes={{
                              name: "dateOfBirth",
                              ariaDescribedby: "dateOfBirth-error"
                          }}
                />
                <div className={styles.alarm} id="dateOfBirth-error" aria-live="polite" aria-atomic="true">
                    {state?.status !== 200 && state?.errors?.dateOfBirth ? state.errors.dateOfBirth.map(err => errorT[err] ? errorT[err] : err).join(", ") : ""}
                </div>
            </div>
            <div className={styles.inputGroup}>
                <Input staticLabels={true} type="password" value={formData["password"]} setValue={setValue("password")}
                       label={<>{t.password} <span style={{color: "#FF0000"}}>*</span></>}
                       attributes={{
                           placeholder: t.passwordPlaceholder,
                           name: "password",
                           "aria-describedby": "password-error"
                       }}
                />
                <div className={styles.alarm} id="password-error" aria-live="polite" aria-atomic="true">
                    {state?.status !== 200 && state?.errors?.password ? state.errors.password.map(err => errorT[err] ? errorT[err] : err).join(", ") : ""}
                </div>
            </div>
            <div className={styles.inputGroup}>
                <Input staticLabels={true} type="password" value={formData["passwordAgain"]}
                       setValue={setValue("passwordAgain")}
                       label={<>{t.confirmPassword} <span style={{color: "#FF0000"}}>*</span></>}
                       attributes={{
                           placeholder: t.confirmPasswordPlaceholder,
                           name: "passwordAgain",
                           "aria-describedby": "passwordAgain-error"
                       }}
                />
                <div className={styles.alarm} id="passwordAgain-error" aria-live="polite" aria-atomic="true">
                    {state?.status !== 200 && state?.errors?.passwordAgain ? state.errors.passwordAgain.map(err => errorT[err] ? errorT[err] : err).join(", ") : ""}
                </div>
            </div>
            <div className={styles.inputGroup}>
                <Input staticLabels={true} type="text" value={formData["email"]} setValue={setValue("email")}
                       label={<>{t.email}</>}
                       attributes={{
                           placeholder: "example@gmail.com",
                           name: "email",
                           "aria-describedby": "email-error"
                       }}
                />
                <div className={styles.alarm} id="email-error" aria-live="polite" aria-atomic="true">
                    {state?.status !== 200 && state?.errors?.email ? state.errors.email.map(err => errorT[err] ? errorT[err] : err).join(", ") : ""}
                </div>
            </div>
            <div className={styles.inputGroup}>
                <Input staticLabels={true} type="text" value={formData["username"]} setValue={setValue("username")}
                       label={<>{t.loginFieldReg} <span style={{color: "#FF0000"}}>*</span></>}
                       attributes={{
                           placeholder: t.loginFieldRegPlaceholder,
                           name: "username",
                           "aria-describedby": "username-error"
                       }}
                />
                <div className={styles.alarm} id="username-error" aria-live="polite" aria-atomic="true">
                    {state?.status !== 200 && state?.errors?.username ? state.errors.username.map(err => errorT[err] ? errorT[err] : err).join(", ") : ""}
                </div>
            </div>
            <button disabled={pending} className={clsx(styles.button, prestyle.buttonFilled)} type="submit">
                {t.registerAction}
            </button>
        </form>
    )
}
