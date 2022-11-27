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
            <Path/>
            <ChallengeBoard challengeData={challengeData}/>
            <Footer/>
        </React.Fragment>
    )
}

export default GroupChallengeMain;