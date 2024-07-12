import Image from "next/image";

import styles from "./contact-info.module.css"
import prestyle from "@/app/lib/ui-components.module.css"

import mail from "./SVG/mail.svg"
import phone from "./SVG/phone.svg"
import tag from "./SVG/tag.svg"


export default function ContactInfo() {
    return (
        <div className={styles.ContactInfo}>
            <a className={`${styles.infoMail} ${prestyle.textBig}`}
               href="mailto:support@slidy.space"
            >
                <Image className={`${styles.imgMail}`} src={mail} height="26" alt='пошта'/>
                support@slidy.space
            </a>
            <a className={`${styles.infoPhone} ${prestyle.textBig}`}
               href='tel:+380980240265'
            >
                <Image className={`${styles.imgPhone}`} src={phone} height="34" alt='телефон'/>
                098 0240 265
            </a>
            <a className={`${styles.infoTag} ${prestyle.textBig}`}
               href='https://t.me/mexicancat228'
            >
                <Image className={`${styles.imgTag}`} src={tag} height="35" alt='локація'/>
                м. Львів, вул. Степана Бандери 28а
            </a>
        </div>
    )
}