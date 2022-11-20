import styles from "../components/component.module.scss"

function Footer() {
    return(
        <div className={styles.footerContainer}>
            <div>
                <p>모두의 챌린지</p>
                <p>@ 2022 modoochallenge All right reserved.</p>
            </div>
            
        </div>
    );
}

export default Footer;