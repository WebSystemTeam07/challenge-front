import axios from "axios";
import { useEffect } from "react";
import port from "../../assets/port.json";
let data=[];
const ChallengeUserTask=(props)=>{
async function getData(){
  const userTaskData=await axios.get(port.url+'/userTask/',{
    params:{
      userId:props.userId,
    challengeId:props.challengeId
  }
  })
  console.log("userTaskData",props.challengeId,userTaskData);
  data.push(userTaskData)
  props.getUserData(data);
}
useEffect(()=>{
  getData();
},[props.userId])

}
export default ChallengeUserTask;