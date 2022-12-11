import axios from "axios";
import { useEffect } from "react";
import port from "../../assets/port.json";
let data=[];
const ChallengeTask=(props)=>{
  
async function getData(){
  console.log(props.userId);
  
  const taskData=await axios.get(port.url+`/task/userandChallenge`,{
    params:{
      userId:props.userId,
      challengeId:props.challengeId
    }
  })
  data.push(taskData);
  console.log("data test",data);
  console.log("taskData",props.challengeId,taskData)
  props.getUserData(data);
}
useEffect(()=>{
  getData();
},[props.userId])

}
export default ChallengeTask;