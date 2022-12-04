import { useState } from "react";
import { Link } from "react-router-dom"

import styles from "../components/component.module.scss"
import './Navigator.css';

function Navigator() {
const [activeNav,setActiveNav]=useState(0);
    return(

        <div className={styles.navigatorContainer}>

            <div className={styles.homeContainer}>

                <Link to='/' style={{ textDecoration: "none" }} onClick={()=>setActiveNav(1)}>
                {console.log(activeNav)}
                    <p className={activeNav===1 ?"activated":"none"}>홈</p>

                </Link>

            </div>

            <div className={styles.menuContainer}>

                    <p>서비스 소개</p>

                <Link to="/GroupChallengePage" style={{ textDecoration: "none" }} onClick={()=>setActiveNav(3)}>

                <p className={activeNav===3 ?"activated":"none"}>그룹 챌린지</p>

                </Link>
                <Link to='/MyChallenge' style={{ textDecoration: "none" }} onClick={()=>setActiveNav(4)}>
                    {console.log(activeNav)}
                <p className={activeNav===4 ?"activated":"none"}>마이 챌린지</p>
                </Link>
                
                <p>마이페이지</p>

            </div>

        </div>

    );

}


export default Navigator;
