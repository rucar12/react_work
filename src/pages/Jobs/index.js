import {useTranslation} from "react-i18next";

import Shake from "react-reveal/Shake";
import Fade from  "react-reveal/Fade";

import styles from "./Jobs.module.scss";
import employee from "../../img/employee.jpg"

const Jobs = () => {

    const {t} = useTranslation();

    return (
        <div className={styles.jobs}>

            <div className={styles.jobs__title}>{t("jobs__title")}</div>
            <div className={styles.jobs__img}>
                <img className={styles.jobs__img_item} src={employee} alt={"Hire"}/>
            </div>
            <Shake>
                <div className={styles.jobs__subtitle}>
                    <span className={ styles.green}>{t("jobs__subtitle1")}</span>
                    <span >{t("jobs__subtitle2")}</span>
                </div>
            </Shake>
            <Fade left delay={500}>
                <div className={styles.jobs__text}>
                    {t("jobs__text1")}
                </div>
            </Fade>
            <Fade left delay={1000}>
                <div className={styles.jobs__text}>
                    {t("jobs__text2")}
                </div>
            </Fade>
            <Fade left delay={1500}>
                <div className={styles.jobs__text}>
                    {t("jobs__text3")} <br/>
                    {t("jobs__text4")}
                </div>
            </Fade>
            <Fade left delay={2000}>
                <div className={styles.jobs__text}>{t("jobs__text5")} {'@'}codecompath.com</div>
            </Fade>
        </div>
    )
}

export default Jobs;
