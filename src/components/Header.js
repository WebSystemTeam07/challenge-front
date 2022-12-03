import { Link } from "react-router-dom"


import styles from "../components/component.module.scss"


function Header({loginUrl}) {

    return(

        <div className={styles.headerContainer}>

            <Link to='/login' style={{ textDecoration: "none" }}>

                <p>로그인</p>

            </Link>

            <p>회원가입</p>

        </div>

    );

}


export default Header;
