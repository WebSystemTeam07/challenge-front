import React, { useState } from "react";
import port from "./../assets/port.json";
import ChallengeForm from "./ChallengeForm";
import axios from 'axios';

const NewChallenge = () => {
  const saveChallengeDataHandler = (enteredChallengeData) => {
    const challengeData = {
      ...enteredChallengeData,
    };
    console.log(port.url)
    console.log(challengeData)
    console.log("challenge", typeof(challengeData.tag)); // axios 이용해서 백엔드에 데이터 보내는 거 해야함
    axios.post(port.url+'/challenge/new',challengeData)
    .then((res)=>{
      console.log(res);
    })
    .catch((e)=>
      console.log(e.response.data.error)
    )
  };

  return (
    <div>
      <ChallengeForm onSaveChallengeData={saveChallengeDataHandler} />
    </div>
  );
};
export default NewChallenge;
