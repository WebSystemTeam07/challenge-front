import axios from "axios";
import React,{useState} from "react";
import { useEffect } from "react";
import port from "../assets/port.json";

const ChallengeUserTask=(props)=>{
async function getData(){
  const userTaskData=await axios.get(port.url+'/userTask/',{
    params:{
      userId:"14667",
    challengeId:"15319"
  }
  })
  const taskData=await axios.get(port.url+`/task/${props.challengeId}`)
  console.log(taskData)
  console.log(Array(taskData)[0].data)
  const filteredData=Array(taskData)[0].data.filter((item)=>item.userTaskId==props.userId)
  console.log("userTaskData",userTaskData);
  console.log("taskData axios",filteredData);

  props.getUserData(userTaskData);
}
useEffect(()=>{
  getData();
},[props.userId])

}
export default ChallengeUserTask;