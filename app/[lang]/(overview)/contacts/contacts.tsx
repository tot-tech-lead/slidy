import styles from "./contact.module.css"
import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";
import steps from "./SVG/steps.svg";

import {Dict} from "@/app/[lang]/dictionaries";

async function MainContactForm({t}: {t: Dict}) {
    return (
        <div className={styles.MainContactForm}
             id="Home-MainContactForm"
             style={{"backgroundImage": `url(${steps.src})`}}>
            <ContactInfo t={t}/>
            <ContactForm t={t}/>
        </div>
    )

}

export default MainContactForm;