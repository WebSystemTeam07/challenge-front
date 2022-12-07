import { NavLink } from "react-router-dom"
import styles from "../components/styles/component.module.scss"

function Navigator() {
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
                <NavLink to='/introduce' style={({ isActive }) => {
                    return {
                        textDecoration: "none",
                        color: isActive ? "#1c8cc9" : "black",
                    };
                }}><p>서비스 소개</p></NavLink>
                <NavLink to='/groupchallengepage' style={({ isActive }) => {
                    return {
                        textDecoration: "none",
                        color: isActive ? "#1c8cc9" : "black",
                    };
                }}><p>그룹 챌린지</p></NavLink>
                <NavLink to='/mychallenge' style={({ isActive }) => {
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