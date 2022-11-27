import React from "react";
import { Link } from "react-router-dom"

function Main(){
    return(
        <>
            <div>GroupChallengeMain입니다.</div>
            <Link to="/groupChallengeMain">
                <p>그룹챌린지메인페이지 이동</p>
            </Link>
        </>
    )
}

export default Main;