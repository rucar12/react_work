import styles from "./Home.module.scss";
import {useTranslation} from "react-i18next";
import LightSpeed from "react-reveal/LightSpeed";


const Home = () => {

    const {t} = useTranslation();

    return (
        <div className={styles.home}>
            <div className={styles.interview}>
                <div className={styles.interview__box}>
                    <div className={styles.interview__title}>
                        {t("home__title")}
                    </div>
                    <div className={styles.interview__subtitle}>
                        <span className={styles.green}>
                            {t("home__subtitle_green")}<br/>
                        </span>
                        <span>
                            {t("home__subtitle_white")}
                        </span>
                    </div>
                </div>

                <div className={styles.interview__faqs}>
                    <div className={styles.interview__text}>
                        {t('home__interview_title')}
                    </div>
                    <div className={styles.interview__faq}>
                        <LightSpeed left collapse>
                            <div className={styles.interview__faq_ask}>
                            <span className={styles.interview__faq_ask_text}>
                                {t("home__interview_ask1")}
                            </span>

                            </div>
                        </LightSpeed>
                        <LightSpeed right collapse>
                            <div className={styles.interview__faq_answer}>
                                <div className={styles.interview__faq_answer_text}>
                                    {t("home__interview_answer1")}
                                </div>
                            </div>
                        </LightSpeed>
                    </div>
                    <div className={styles.interview__faq}>
                        <LightSpeed left collapse>
                            <div className={styles.interview__faq_ask}>
                            <span className={styles.interview__faq_ask_text}>
                                {t("home__interview_ask2")}
                            </span>
                            </div>
                        </LightSpeed>
                        <LightSpeed right collapse>
                            <div className={styles.interview__faq_answer}>
                                <div className={styles.interview__faq_answer_text}>
                                    {t("home__interview_answer2")}
                                </div>
                            </div>
                        </LightSpeed>
                    </div>
                    <div className={styles.interview__faq}>
                        <LightSpeed left collapse>
                            <div className={styles.interview__faq_ask}>
                            <span className={styles.interview__faq_ask_text}>
                                {t("home__interview_ask3")}
                            </span>
                            </div>
                        </LightSpeed>
                        <LightSpeed right collapse>
                            <div className={styles.interview__faq_answer}>
                            <span className={styles.interview__faq_answer_text}>
                                {t("home__interview_answer3")}
                            </span>
                            </div>
                        </LightSpeed>
                    </div>
                    <div className={styles.interview__faq}>
                        <LightSpeed left collapse>
                            <div className={styles.interview__faq_ask}>
                            <span className={styles.interview__faq_ask_text}>
                                {t("home__interview_ask4")}
                            </span>
                            </div>
                        </LightSpeed>
                        <LightSpeed right collapse>
                            <div className={styles.interview__faq_answer}>
                                <div className={styles.interview__faq_answer_text}>
                                    {t("home__interview_answer4")}
                                </div>
                            </div>
                        </LightSpeed>
                    </div>
                    <div className={styles.interview__faq}>
                        <LightSpeed left collapse>
                            <div className={styles.interview__faq_ask}>
                            <span className={styles.interview__faq_ask_text}>
                                {t("home__interview_ask5")}
                            </span>
                            </div>
                        </LightSpeed>
                        <LightSpeed right collapse>
                            <div className={styles.interview__faq_answer}>
                                <div className={styles.interview__faq_answer_text}>
                                    {t("home__interview_answer5")}
                                </div>
                            </div>
                        </LightSpeed>
                    </div>
                    <div className={styles.interview__faq}>
                        <LightSpeed left collapse>
                            <div className={styles.interview__faq_ask}>
                            <span className={styles.interview__faq_ask_text}>
                                {t("home__interview_ask6")}
                            </span>
                            </div>
                        </LightSpeed>
                        <LightSpeed right collapse>
                            <div className={styles.interview__faq_answer}>
                                <div className={styles.interview__faq_answer_text}>
                                    {t("home__interview_answer6_1")}
                                    <br/>
                                    {t("home__interview_answer6_2")}
                                </div>
                            </div>
                        </LightSpeed>
                    </div>
                    <div className={styles.interview__faq}>
                        <LightSpeed left collapse>
                            <div className={styles.interview__faq_ask}>
                            <span className={styles.interview__faq_ask_text}>
                                {t("home__interview_ask7")}
                            </span>
                            </div>
                        </LightSpeed>
                        <LightSpeed right collapse>
                            <div className={styles.interview__faq_answer}>
                                <div className={styles.interview__faq_answer_text}>
                                    {t("home__interview_answer7")}
                                </div>
                            </div>
                        </LightSpeed>
                    </div>
                    <div className={styles.interview__faq}>
                        <LightSpeed left collapse>
                            <div className={styles.interview__faq_ask}>
                            <span className={styles.interview__faq_ask_text}>
                                {t("home__interview_ask8")}
                            </span>
                            </div>
                        </LightSpeed>
                        <LightSpeed right collapse>
                            <div className={styles.interview__faq_answer}>
                                <div className={styles.interview__faq_answer_text}>
                                    {t("home__interview_answer8")}
                                </div>
                            </div>
                        </LightSpeed>
                    </div>
                    <div className={styles.interview__faq}>
                        <LightSpeed left collapse>
                            <div className={styles.interview__faq_ask}>
                            <span className={styles.interview__faq_ask_text}>
                                {t("home__interview_ask9")}
                            </span>
                            </div>
                        </LightSpeed>
                        <LightSpeed right collapse>
                            <div className={styles.interview__faq_answer}>
                                <div className={styles.interview__faq_answer_text}>
                                    {t("home__interview_answer9")}
                                </div>
                            </div>
                        </LightSpeed>
                    </div>
                    <div className={styles.interview__faq}>
                        <LightSpeed left collapse>
                            <div className={styles.interview__faq_ask}>
                            <span className={styles.interview__faq_ask_text}>
                                {t("home__interview_ask10")}
                            </span>
                            </div>
                        </LightSpeed>
                        <LightSpeed right collapse>
                            <div className={styles.interview__faq_answer}>
                                <div className={styles.interview__faq_answer_text}>
                                    {t("home__interview_answer10")}
                                </div>
                            </div>
                        </LightSpeed>
                    </div>
                    <div className={styles.interview__text}>
                        {t("home__interview_text")}
                    </div>
                    <div className={styles.interview__text}>
                        {t("home__interview_date")}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;
