import styles from "../components/component.module.scss"

function Footer() {
    return(
        <div className={styles.footerContainer}>
            <div>
                <p>포 마이 라이프</p>
                <p>@ 2022 For My Life All right reserved.</p>
            </div>
            
        </div>
    );
}

export default Footer;