import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

import Flash  from "react-reveal/Flash";
import HeadShake   from "react-reveal/HeadShake";
import Zoom   from "react-reveal/Zoom";

import styles from "./Investor.module.scss";

const Investor = () => {

    const { t } =useTranslation();

    return (
        <div className={styles.investor}>
            <div className={styles.investor__title}>{t("investor__title")}</div>
            <HeadShake duration={1500} >
                <div className={styles.investor__subtitle}>
                    <div className={styles.investor__subtitle_text}>
                        {t("investor__window_text")}
                        <Flash duration={2000} >
                            <NavLink to={"/contact"} className={styles.investor__subtitle_btn}>
                                <div className={styles.investor__subtitle_btn_text}>{t("investor__window_btn")}</div>
                                <div className={styles.investor__subtitle_btn_icon}>🡥</div>
                            </NavLink>
                        </Flash>
                    </div>
                </div>
            </HeadShake>

            <div>
                <div className={styles.investor__facts_title}>{t("investor__facts_title")}</div>
                <div className={styles.investor__facts}>
                    <Zoom left>
                        <ul className={styles.investor__text}>
                            <li>{t("investor__facts_ul1")}</li>
                            <li>{t("investor__facts_ul2")}</li>
                            <li>{t("investor__facts_ul3")}</li>
                            <li>{t("investor__facts_ul4")}</li>
                            <li>{t("investor__facts_ul5")}</li>
                            <li>{t("investor__facts_ul6")}</li>
                            <li>{t("investor__facts_ul7")}</li>
                            <li>{t("investor__facts_ul8")}</li>
                            <li>{t("investor__facts_ul9")}</li>
                            <li>{t("investor__facts_ul10")}</li>
                        </ul>
                    </Zoom>

                    <Zoom right  >
                        <ol className={styles.investor__text}>
                            <li>{t("investor__facts_ol1")} </li>
                            <li>{t("investor__facts_ol2")}</li>
                            <li>{t("investor__facts_ol3")}</li>
                        </ol>
                    </Zoom>
                </div>
            </div>
        </div>
    )
}

export default Investor;
