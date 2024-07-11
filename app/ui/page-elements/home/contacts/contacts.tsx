import styles from "./contact.module.css"
import ContactInfo from "./contact-info";
import ContactForm from "./contact-form";
import steps from "./SVG/steps.svg";

function MainContactForm() {
    return (
        <div className={styles.MainContactForm}
             id="Home-MainContactForm"
             style={{"backgroundImage": `url(${steps.src})`}}>
            <ContactInfo />
            <ContactForm />
        </div>
    )

}

export default MainContactForm;