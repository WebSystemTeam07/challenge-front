import { Link } from "react-router-dom"
import styles from "../components/component.module.scss"

function Navigator() {
    return(
        <div className={styles.navigatorContainer}>
            <div className={styles.homeContainer}>
                <Link to='/' style={{ textDecoration: "none" }}>
                    <p>홈</p>
                </Link>
            </div>
            <div className={styles.menuContainer}>
                <Link to='/introduce' style={{ textDecoration: "none" }}>
                    <p>서비스 소개</p>
                </Link>
                <p>그룹 챌린지</p>
                <p>개인 챌린지</p>
                <p>마이페이지</p>
            </div>
        </div>
    );
}

export default Navigator;