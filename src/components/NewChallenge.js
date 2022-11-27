import React,{useState} from "react";
import ChallengeForm from "./ChallengeForm";
const NewChallenge=()=>{
  const [isEditing,setIsEditing]=useState(false);
  const saveChallengeDataHandler=(enteredChallengeData)=>{
    const challengeData={
    ...enteredChallengeData
    };
    setIsEditing(false);
    console.log("challenge",challengeData); // axios 이용해서 백엔드에 데이터 보내는 거 해야함
    const response=fetch('http://localhost:3000/api/challenges/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name:challengeData.title,
        startDate:challengeData.startDate,
        endDate:challengeData.endDate
      })
    });
    const responseData=response.json();
    console.log(responseData);
  };

  const startEditingHandler=()=>{
    setIsEditing(true);
  }
  const stopEditingHandler=()=>{
    setIsEditing(false);
  }
  return(
    <div>
      {!isEditing&&<button onClick={startEditingHandler}>Add New Challenge</button>}
      {isEditing&&<ChallengeForm 
      onSaveChallengeData={saveChallengeDataHandler}
      onCancel={stopEditingHandler}/>}
      
    </div>
  );
};
export default NewChallenge;