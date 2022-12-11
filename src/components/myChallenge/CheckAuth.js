import {useState} from 'react';
import axios from 'axios';
import port from "../../assets/port.json";
import styles from "../styles/personal.module.scss";
const CheckAuth=(props)=>{
  const [attend,setAttend]=useState([]);//인증확인
  console.log("startDate",props.startDate)
  console.log("props.userId",props.userId)
  const checkAuth=(startDate)=>{
    console.log(startDate)
    const now=new Date();
    let year = now.getFullYear();  
    let month = now.getMonth()+1;      
    let date = now.getDate(); 
    let startDate_arr=startDate.split("-");
    let stDate=new Date(startDate_arr[0],startDate_arr[1],startDate_arr[2]);
    let today=new Date(year,month,date);
    
   console.log("date",today,stDate);
    let day=(today.getTime()-stDate.getTime())/(1000*60*60*24)+1;
     const tmp_attend={"id":props.challengeId,"attend":'T',"userId":props.userId,"day":day}
    const req_attend={"challengeId":props.challengeId,"userId":props.userId}
     setAttend([...attend,tmp_attend]);
    axios.put(port.url+`/userTask/status/${day}`,req_attend)
    .then((res)=>{
      console.log(res);
    })
    .catch((e)=>
      console.log(e.response.data.error)
    )
  }
  return(
    <>
  <button type='button' className={styles.auth_button} onClick={(e)=>{
    checkAuth(props.startDate);
  }}>인증</button> 
  {console.log(attend)}
  {props.getAuth(attend)}
  
  </>
  )
}
export default CheckAuth;