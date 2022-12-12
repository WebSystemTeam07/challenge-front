import { React, useEffect, useState } from "react";

import Bar from "../components/Bar.js";
import Path from "../components/Path";
import IndividualChallengeBoard from "../components/IndividualChallenge/IndividualChallengeBoard.js";

import axios from 'axios';
import port from "./../assets/port.json";


function IndividualChallengeMain(){
    const [challengeData, setChallengeData] = useState([]);

    async function getChallengeData() {
        return await axios.get(port.url + '/challenge/personal')
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
        <Bar path="전체보기 > " content="개인 챌린지" />
        <IndividualChallengeBoard challengeData={challengeData}/>
        </>
    )
}

export default IndividualChallengeMain;