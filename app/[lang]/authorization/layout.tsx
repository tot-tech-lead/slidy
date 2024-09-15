import styles from "./layout.module.css"
import {getDictionary} from "@/app/[lang]/dictionaries";
import AuthorizationInterface from "@/app/[lang]/authorization/authorizationInterface";

export default async function AuthLayout({children, params}: {
    children: React.ReactNode;
    params: {
        lang: string
    }
}) {
    let {lang} = params
    let t = await getDictionary(lang)

    return (
        <>
            <div className={styles.Authorization}>
                <div className={styles.wrapper}>
                    <AuthorizationInterface t={t.authorization}/>
                    {children}
                </div>
            </div>
        </>
    )
}

