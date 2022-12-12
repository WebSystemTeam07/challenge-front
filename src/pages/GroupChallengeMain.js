import { React, useEffect, useState } from "react";
import Header from "../components/Header.js";
import Footer from '../components/Footer.js';
import Navigator from "../components/Navigator.js";
import Path from "../components/Path.js";
import Bar from "../components/Bar.js";
import ChallengeBoard from "../components/groupChallenge/ChallengeBoard";

import axios from 'axios';
import port from "./../assets/port.json";

//import challengeData from "../data/GroupChallengeData"


function GroupChallengeMain(){
    const [challengeData, setChallengeData] = useState([]);
    
    async function getChallengeData() {
        return await axios.get(port.url + '/challenge/group')
    }

    useEffect(() => {
        getChallengeData().then((res) => {
            setChallengeData([...res.data])
            console.log(res.data)
        }).catch(e =>
            console.log(e.message))
    }, [])

    return(
        <>
            <Bar path={"전체보기 > "} content={"그룹 챌린지"}/>
            <ChallengeBoard challengeData={challengeData}/>
        </>
    )
}
/*
{
    challengeData && <ChallengeBoard challengeData={challengeData}/>
}
*/

export default GroupChallengeMain;