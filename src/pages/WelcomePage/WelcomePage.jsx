import { NavLink, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsLogin } from "../../redux/auth/auth-selectors";

import styles from "./welcomePage.module.css"

import welcomeImg from "../../images/Welcome.png"


const WelcomePage = () => {
    const isLogin = useSelector(selectIsLogin);

    if(isLogin) {
        return <Navigate to="/home" />
    }

    return(
        <div className={styles.wrap}>
            <img className={styles.image} src={welcomeImg} alt="Man with a laptop emoji"/>
            <div className={styles.item}>
                <svg className={styles.logoIcon} width="15" height="20" viewBox="0.5 0.5 15 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.664 18.784c.306-1.59.566-3.263.934-4.936.18-.876-.04-1.25-1.019-1.183-.978.067-2.07.034-3.112 0C.427 12.632.24 12.108.84 11.36 3.793 7.713 6.78 4.11 9.757.518c.334-.407.718-.697 1.267-.39.549.307.436.686.345 1.143-.328 1.673-.6 3.347-.962 4.986-.186.848.057 1.15.94 1.116a26.432 26.432 0 0 1 2.659 0c.503 0 1.165-.262 1.426.424.26.686-.289.976-.566 1.383a381.696 381.696 0 0 1-3.44 4.177c-1.701 2.03-3.39 4.053-5.064 6.068-.328.396-.696.714-1.256.513-.56-.2-.442-.675-.442-1.154Z" fill="#fff"/></svg>
                <p className={styles.itemText}>Task Pro</p>
            </div>
                <p className={styles.text}>
                    Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!
                </p>
            <div className={styles.buttonWrapper}>
                <NavLink to="/auth/register" className={styles.link}>
                    <button className={styles.button} type="button">Registration</button>
                </NavLink>
                <NavLink to="/auth/login" className={styles.link}>
                    Log in
                </NavLink>
            </div>
        </div>
    )
};

export default WelcomePage;
