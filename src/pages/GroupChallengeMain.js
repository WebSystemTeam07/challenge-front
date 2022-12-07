import {React, useEffect} from "react";
import Header from "../components/Header.js";
import Footer from '../components/Footer.js';
import Navigator from "../components/Navigator.js";
import Path from "../components/groupChallenge/Path.js";
import ChallengeBoard from "../components/groupChallenge/ChallengeBoard";

import axios from 'axios';
import port from "./../assets/port.json";

function GroupChallengeMain(){
    const challengeData =[] 
    
    useEffect (() => {
        getChallengeData().then(data => {
            challengeData = data
            console.log(challengeData)
        }).catch(e =>
            console.log(e.message))
    },[])
    async function getChallengeData() {
        return await axios.get(port.url +'/challenge/group')
    }
    
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