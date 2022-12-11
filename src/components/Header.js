import { Link } from "react-router-dom"
import { useCookies } from "react-cookie";
import styles from "../components/styles/component.module.scss"
import { useEffect, useState } from "react";
import { style } from "@mui/system";

function Header({ loginUrl }) {
    const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
    const [login, setLogin] = useState(false);
    useEffect(() => {
        console.log(login)
        if (cookies.userData == undefined)
            setLogin(false)
        else
            setLogin(true)
    }, [cookies])
    return (
        <div className={styles.headerContainer}>
            {!login &&
                <>
                    <Link to='/login' style={{ textDecoration: "none" }}>
                        <p>로그인</p>
                    </Link>
                    <Link to='/signup' style={{ textDecoration: "none" }}>
                        <p>회원가입</p>
                    </Link>
                </>
            }
            {
                login &&
                <Link to='/' style={{ textDecoration: "none" }}>
                    <p onClick={() => {
                        removeCookie("userData")
                    }} style={{ cursor: "pointer" }}>로그아웃</p>
                </Link>
            }
        </div>
    );
}

export default Header;