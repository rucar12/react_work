import {useTranslation} from "react-i18next";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import styles from "./Contact.module.scss";

const Contact = () => {

    const { t } = useTranslation();


    return (
        <div className={styles.contact}>

            <Fade left>
                <div className={styles.contact__text}>
                    <p className={styles.contact__title}>
                        {t("contact__title")}
                    </p>
                    <p className={styles.contact__subtitle}>
                        {t("contact__subtitle")}
                    </p>
                </div>
            </Fade>
            <Zoom right>
                <form className={styles.contact__form}>
                    <div className={styles.contact__form_item}>
                        <input className={styles.contact__input} name={"name"} maxLength={"500"}
                               onInvalid={e => e.target.setCustomValidity(t('contact_name_msg'))}
                               required placeholder={t("contact_name")}/>
                    </div>
                    <div className={styles.contact__form_item}>
                        <input className={styles.contact__input} name={"email"} maxLength={"500"}
                               onInvalid={e => e.target.setCustomValidity(t('contact_mail_msg'))}
                               required placeholder={t("contact_mail")}/>
                    </div>
                    <div className={styles.contact__form_item}>
                        <input className={styles.contact__input} name={"phone"} maxLength={"500"}
                               onInvalid={e => e.target.setCustomValidity(t('contact_phone_msg'))}
                               required type={"number"} placeholder={t("contact_phone")}/>
                    </div>
                    <div className={styles.contact__form_item}>
                    <textarea className={styles.contact__description} name={"description"} maxLength={"500"}
                              onInvalid={e => e.target.setCustomValidity(t('contact_description_msg'))}
                              required placeholder={t("contact_description")}/>
                    </div>
                    <div className={styles.contact__form_item}>
                        <input className={styles.contact__submit} name={"name"}  type={"submit"} value={t("contact_submit")} onSubmit={()=>console.log("Hello")}/>
                    </div>
                </form>
            </Zoom>
        </div>
    )
}

export default Contact;
