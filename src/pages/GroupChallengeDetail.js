import React from "react";
import {useLocation} from "react-router";
import Header from "../components/Header.js";
import Footer from '../components/Footer.js';
import Navigator from "../components/Navigator.js";
import Path from "../components/groupChallenge/Path.js";
import ChallengeDetailBoard from "../components/GroupBoardComponent/ChallengeDetailBoard.js";

function GroupChallengeDetail(){
    const location = useLocation();
    return(
        <React.Fragment>
            <Path path="전체보기 > 그룹 챌린지 > 상세"/>
            <ChallengeDetailBoard challenge={location.state.challenge}/>
        </React.Fragment>
    )
}

export default GroupChallengeDetail;