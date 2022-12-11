import { NavLink } from "react-router-dom"
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import styles from "../components/styles/component.module.scss"

function Navigator() {
    const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
    const [login, setLogin] = useState(false);
    useEffect(()=>{
        console.log(login)
        if(cookies.userData == undefined)
        setLogin(false)
        else
        setLogin(true)
    },[cookies])
    return(
        <div className={styles.navigatorContainer}>
            <div className={styles.homeContainer}>
                <NavLink to='/' style={({ isActive }) => {
                    return {
                        textDecoration: "none",
                        color: isActive ? "#1c8cc9" : "black",
                    };
                }}><p>홈</p></NavLink>
            </div>
            <div className={styles.menuContainer}>
                {!login &&
                <NavLink to='/introduce' style={({ isActive }) => {
                    return {
                        textDecoration: "none",
                        color: isActive ? "#1c8cc9" : "black",
                    };
                }}><p>서비스 소개</p></NavLink>}
                {login &&
                <NavLink to='/myChallenge' style={({ isActive }) => {
                    return {
                        textDecoration: "none",
                        color: isActive ? "#1c8cc9" : "black",
                    };
                }}><p>마이 챌린지</p></NavLink>}
                <NavLink to='/groupchallengepage' style={({ isActive }) => {
                    return {
                        textDecoration: "none",
                        color: isActive ? "#1c8cc9" : "black",
                    };
                }}><p>그룹 챌린지</p></NavLink>
                <NavLink to='/individualchallengepage' style={({ isActive }) => {
                    return {
                        textDecoration: "none",
                        color: isActive ? "#1c8cc9" : "black",
                    };
                }}><p>개인 챌린지</p></NavLink>
                <NavLink to='/mypage' style={({ isActive }) => {
                    return {
                        textDecoration: "none",
                        color: isActive ? "#1c8cc9" : "black",
                    };
                }}><p>마이페이지</p></NavLink>
            </div>
        </div>
    );
}

export default Navigator;