import React from "react";
import Header from "../components/Header.js";
import Footer from '../components/Footer.js';
import Navigator from "../components/Navigator.js";
import Path from "../components/groupChallenge/Path.js";
import ChallengeBoard from "../components/groupChallenge/ChallengeBoard";

import challengeData from "../data/GroupChallengeData"

function GroupChallengeMain(){
    return(
        <React.Fragment>
            <Path path="전체보기 > 그룹 챌린지"/>
            <ChallengeBoard challengeData={challengeData}/>
        </React.Fragment>
    )
}

export default GroupChallengeMain;