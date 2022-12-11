import ChallengeData from '../data/ChallengeData.json';
import { useNavigate } from 'react-router-dom';
import styles from './styles/personal.module.scss';
import UserData from './ChallengeUserData';
import { useState } from 'react';

const GroupChallenge=()=>{
  const tmpUserId="15002";
  const tmpChallengeId="13443";
  const [groupUserData, setGroupUserData]=useState([]);
  const gpChallengeData=ChallengeData.data.filter((item)=>
    item.type=="group")
    const navigate=useNavigate();

 function onMoveHandler(){
  navigate("/GroupChallengePage");
}
const getUserData=(data)=>{
  console.log(data.data.group);
  setGroupUserData(data.data.group);
}
  return(
    <>
    <div className={styles.group_center}>
    <UserData userId={tmpUserId} getUserData={getUserData}/>
    {groupUserData&&groupUserData.map((item)=>{
      return(
  <li key={item.id} className={styles.list}>
   <img src={item.imageUrl} alt={"대체사진"}/>
   <div className={styles.textBox}>
  {item.title}
  </div>
  <button type='button' className={styles.group_button} onClick={onMoveHandler}>그룹 게시판 이동</button>
  </li>
      )
    }
  )}
  </div>
  </>
  )
  
}
export default GroupChallenge;