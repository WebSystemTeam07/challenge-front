import axios from "axios";
import React,{useState} from "react";
import { useEffect } from "react";
import port from "../assets/port.json";

const ChallengeUserTask=(props)=>{
async function getData(){
  const userTaskData=await axios.get(port.url+'/userTask/',{
    params:{
      userId:props.userId,
    challengeId:props.challengeId
  }
  })
  console.log("userTaskData",userTaskData);

  props.getUserData(userTaskData);
}
useEffect(()=>{
  getData();
},[props.userId])

}
export default ChallengeUserTask;