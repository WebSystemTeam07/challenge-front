import React,{useState} from "react";
import ChallengeForm from "./ChallengeForm";
const NewChallenge=()=>{
  const saveChallengeDataHandler=(enteredChallengeData)=>{
    const challengeData={
    ...enteredChallengeData
    };
    console.log("challenge",typeof(challengeData.startDate))
     console.log("challenge",challengeData); // axios 이용해서 백엔드에 데이터 보내는 거 해야함
    //  const response=fetch('http://localhost:3000/api/challenges/register',{
    //    method:'POST',
    //    headers:{
    //      'Content-Type':'application/json'
    //    },
    //    body:JSON.stringify({
    //      title:challengeData.title,
    //      startDate:challengeData.startDate,
    //      endDate:challengeData.endDate,
    //       term:challengeData.term,
    // type:challengeData.type,
    // category:challengeData.category,
    // method:challengeData.method,
    // content:challengeData.content,
    // tag:challengeData.tag
           
    //    })
    //  });
    //  const responseData=response.json();
    //  console.log(responseData);
  };

  return(
    <div>
      <ChallengeForm 
      onSaveChallengeData={saveChallengeDataHandler}
      />
      
    </div>
  );
};
export default NewChallenge;