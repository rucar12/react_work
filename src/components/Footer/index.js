import styles from "./Footer.module.scss";
import {NavLink} from "react-router-dom";

const Footer = () => {

    return(
        <div className={styles.footer}>
            <NavLink className={styles.footer__text} to={"/contact"}>© 2022 by CodeCompath LLC</NavLink>
        </div>
    )

}

export default Footer;