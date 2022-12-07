import { Link } from "react-router-dom"

import styles from "../components/styles/component.module.scss"

function Header({loginUrl}) {
    return(
        <div className={styles.headerContainer}>
            <Link to='/login' style={{ textDecoration: "none" }}>
                <p>로그인</p>
            </Link>
            <Link to='/signup' style={{ textDecoration: "none" }}>
                <p>회원가입</p>
            </Link>
        </div>
    );
}

export default Header;