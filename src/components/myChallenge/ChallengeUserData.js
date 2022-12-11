import axios from "axios";
import { useEffect } from "react";
import port from "../../assets/port.json";

const ChallengeData=(props)=>{
async function getData(){
  console.log(props.userId);
  const userData=await axios.get(port.url+`/challenge/user/${props.userId}`)
  
  console.log("userData",userData)

  props.getUserData(userData);
}
useEffect(()=>{
  getData();
},[props.userId])

}
export default ChallengeData;