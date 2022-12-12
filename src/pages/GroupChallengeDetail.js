import React from "react";
import {useLocation} from "react-router";
import Header from "../components/Header.js";
import Footer from '../components/Footer.js';
import Navigator from "../components/Navigator.js";
import Path from "../components/Path.js";
import Bar from "../components/Bar.js";
import ChallengeDetailBoard from "../components/GroupChallenge/ChallengeDetailBoard.js";

function GroupChallengeDetail(){
    const location = useLocation();
    return(
        <React.Fragment>
            <Bar path={"전체보기 > 그룹 챌린지 > "} content={"상세"} />
            <ChallengeDetailBoard challenge={location.state.challenge}/>
        </React.Fragment>
    )
}

export default GroupChallengeDetail;