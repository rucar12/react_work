import {useTranslation} from "react-i18next";

import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import Pulse from "react-reveal/Pulse";

import styles from "./Product.module.scss";
import agile from "../../img/Agile.png";
import vcs from "../../img/carusel3.png";


const Product = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.product}>
            <div className={styles.product__post}>
                <div className={styles.product__info}>
                    <Fade left>
                        <div className={styles.product__title}>
                            {t('product__title_1')}
                        </div>
                    </Fade>
                    <Fade left >
                        <p className={styles.product__text}>
                            {t("product__text1_1")}
                        </p>
                    </Fade>
                    <Fade left delay={500} >
                        <p className={styles.product__text}>
                            {t("product__text2_1")}
                        </p>
                    </Fade>
                    <Fade left >
                        <p className={styles.product__text}>
                            {t("product__text3_1")}
                        </p>
                    </Fade>
                </div>
                <div>
                    <Rotate top right>
                        <div className={styles.product__img}>
                            <img className={styles.product__img_item} src={agile} alt={"agile"}/>
                        </div>
                    </Rotate>
                </div>
            </div>
            <div className={styles.product__post}>
                <div>
                    <Rotate top left>
                        <div className={styles.product__img_reverse}>
                            <img className={styles.product__img_reverse_item} src={vcs} alt="agile" width={"100%"}/>
                        </div>
                    </Rotate>
                </div>
                <div className={styles.product__info}>
                    <Fade right collapse>
                        <div className={styles.product__title_reverse}>
                            {t('product__title_2')}
                        </div>
                    </Fade>
                    <Fade right collapse  >
                        <p className={styles.product__text_reverse}>
                            {t("product__text1_2")}
                        </p>
                    </Fade>
                    <Fade right collapse delay={500}>
                        <p className={styles.product__text_reverse}>
                            {t("product__text2_2")}
                        </p>
                    </Fade>
                    <Fade right collapse delay={1000}>
                        <p className={styles.product__text_reverse}>
                            {t("product__text3_2")}
                        </p>
                    </Fade>
                </div>
            </div>
            <div className={styles.product__post_block}>
                <Fade left collapse>
                    <div className={styles.product__title}>
                        {t('product__title_3')}
                    </div>
                </Fade>
                <div className={styles.product__cards}>
                    <Pulse collapse>
                        <div className={styles.product__card}>
                            <div className={styles.product__card_title}>
                                {t('product__cardtitle1_3')}
                            </div>
                            <div className={styles.product__card_text}>
                                {t('product__cardtext1_3')}
                            </div>
                        </div>
                    </Pulse>
                    <Pulse collaps>
                        <div className={styles.product__card}>
                            <div className={styles.product__card_title}>
                                {t('product__cardtitle2_3')}
                            </div>
                            <div className={styles.product__card_text}>
                                {t('product__cardtext2_3')}
                            </div>
                        </div>
                    </Pulse>
                    <Pulse collaps>
                        <div className={styles.product__card}>
                            <div className={styles.product__card_title}>
                                {t('product__cardtitle3_3')}
                            </div>
                            <div className={styles.product__card_text}>
                                {t('product__cardtext3_3')}
                            </div>
                        </div>
                    </Pulse>
                    <Pulse collaps>
                        <div className={styles.product__card}>
                            <div className={styles.product__card_title}>
                                {t('product__cardtitle4_3')}
                            </div>
                            <div className={styles.product__card_text}>
                                {t('product__cardtext4_3')}
                            </div>
                        </div>
                    </Pulse>
                </div>
            </div>
            <div className={styles.product__post_block}>
                <Fade left>
                    <div className={styles.product__title}>
                        {t('product__title_4')}
                    </div>
                </Fade>
                <Fade left>
                    <div className={styles.product__text}>
                        {t('product__text_4')}
                    </div>
                </Fade>
                <div className={styles.product__cards}>
                    <Pulse>
                        <div className={styles.product__card}>
                            <div className={styles.product__card_title}>
                                {t('product__cardtitle1_4')}
                            </div>
                            <div className={styles.product__card_text}>
                                {t('product__cardtext1_4')}
                            </div>
                        </div>
                    </Pulse>
                    <Pulse>
                        <div className={styles.product__card}>
                            <div className={styles.product__card_title}>
                                {t('product__cardtitle2_4')}
                            </div>
                            <div className={styles.product__card_text}>
                                {t('product__cardtext2_4')}
                            </div>
                        </div>
                    </Pulse>
                    <Pulse>
                        <div className={styles.product__card}>
                            <div className={styles.product__card_title}>
                                {t('product__cardtitle3_4')}
                            </div>
                            <div className={styles.product__card_text}>
                                {t('product__cardtext3_4')}
                            </div>
                        </div>
                    </Pulse>
                    <Pulse>
                        <div className={styles.product__card}>
                            <div className={styles.product__card_title}>
                                {t('product__cardtitle4_4')}
                            </div>
                            <div className={styles.product__card_text}>
                                {t('product__cardtext4_4')}
                            </div>
                        </div>
                    </Pulse>
                </div>
            </div>
        </div>
    )
}

export default Product;
