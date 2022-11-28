import React from "react";
import Header from "../components/Header.js";
import Footer from '../components/Footer.js';
import Navigator from "../components/Navigator.js";
import Path from "../components/Path.js";
import ChallengeBoard from "../components/ChallengeBoard.js";

import challengeData from "../data/ChallengeData.js";

function GroupChallengeMain(){
    return(
        <React.Fragment>
            <Header/>
            <Navigator/>
            <Path path="전체보기 > 그룹 챌린지"/>
            <ChallengeBoard challengeData={challengeData}/>
            <Footer/>
        </React.Fragment>
    )
}

export default GroupChallengeMain;