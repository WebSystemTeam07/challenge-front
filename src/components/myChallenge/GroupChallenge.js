import { useNavigate } from 'react-router-dom';
import styles from '../styles/personal.module.scss';
import UserData from './ChallengeUserData';
import { useState } from 'react';
import { useCookies } from "react-cookie";
const GroupChallenge=()=>{
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
    const user =  cookies.userData.id;
  const [groupUserData, setGroupUserData]=useState([]);
    const navigate=useNavigate();

 function onMoveHandler(id){
  console.log("id",id);
  navigate("/groupchallengepage/board", {state:{challengeId:id}})
}
const getUserData=(data)=>{
  console.log(data.data.group);
  setGroupUserData(data.data.group);
}
  return(
    <>
    <div className={styles.group_center}>
    <UserData userId={user} getUserData={getUserData}/>
    {groupUserData&&groupUserData.map((item)=>{
      return(
  <li key={item.id} className={styles.list}>
   <img src={item.imageUrl} alt={"대체사진"}/>
   <div className={styles.textBox}>
  {item.title}
  </div>
  <button type='button' className={styles.group_button} onClick={()=>onMoveHandler(item.id)}>그룹 게시판 이동</button>
  </li>
      )
    }
  )}
  </div>
  </>
  )
  
}
export default GroupChallenge;