import {NavLink} from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../img/Compass_blue.png";
import navbar from "../../img/navbar.png";

import styles from "./Header.module.scss";
import {useState} from "react";
import {Flags} from "../index";

const Header = () => {

    const { t } = useTranslation();

    const [bar, setBar] = useState(false);

    const handleChange = () => {
        if (bar===true) {
            setBar(!bar);
        } else {
            setBar(!bar)
        }
    }

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.logo_box}>
                    <img className={styles.logo_img} src={logo} alt="logo"/>
                </div>
            </div>
            <div className={styles.nav}>
                <NavLink className={styles.nav_item} to={"/"}>{t('home')}</NavLink>
                <NavLink className={styles.nav_item} to={"/product"}>{t('product')}</NavLink>
                <NavLink className={styles.nav_item} to={"/investor"}>{t('investor')}</NavLink>
                <NavLink className={styles.nav_item} to={"/jobs"}>{t('jobs')}</NavLink>
                <NavLink className={styles.nav_item} to={"/contact"}>{t('contact')}</NavLink>
            </div>
            <div className={styles.navbar} onClick={handleChange}>
                <img src={navbar} className={styles.navbar__icon_open}/>
                {bar &&(
                    <div className={styles.navbar__isopen}>
                        <NavLink className={styles.navbar__item} to={"/"}>Home</NavLink>
                        <NavLink className={styles.navbar__item} to={"/product"}>Product</NavLink>
                        <NavLink className={styles.navbar__item} to={"/investor"}>Investor</NavLink>
                        <NavLink className={styles.navbar__item} to={"/jobs"}>Jobs</NavLink>
                        <NavLink className={styles.navbar__item} to={"/contact"}>Contact</NavLink>
                    </div>
                )}
            </div>
            <Flags/>

        </div>

    )

}
export default Header