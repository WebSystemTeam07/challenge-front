import axios from "axios";
import React,{useState} from "react";
import { useEffect } from "react";
import port from "../assets/port.json";

const ChallengeTask=(props)=>{
async function getData(){
  console.log(props.userId);
  const taskData=await axios.get(port.url+`/task/userandChallenge`,{
    params:{
      userId:props.userId,
      challengeId:props.challengeId
    }
  })
  props.getUserData(taskData);
}
useEffect(()=>{
  getData();
},[props.userId])

}
export default ChallengeTask;