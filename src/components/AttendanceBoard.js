import React,{useEffect, useState} from 'react';
import styles from './styles/attend.module.scss';
import authData from '../data/userTaskData.json';
import dailyData from '../data/taskData.json';
const AttendanceBoard=({attend,challengeId})=>{
  const userTaskData=authData.userTask.filter((item)=>item.challengeId==challengeId);
  console.log("personData before",userTaskData)
  const taskData=dailyData.task.filter((item)=>item.challengeId==challengeId);
  console.log("taskData",taskData)
  console.log("attend challengeId",attend,challengeId)
  const filteredAttend=attend.filter((item)=>item.id==challengeId)
  console.log("filter",filteredAttend)
  useEffect(()=>{
    <Board givenAuth={filteredAttend} userTaskData={userTaskData} taskData={taskData}/>
  },[attend])
 return(
  <Board givenAuth={filteredAttend} userTaskData={userTaskData} taskData={taskData}/>
 )
}
const Square=({day,attend,content})=>{
  let auth;
  console.log(attend)
  if(attend===true){
    auth="O";
  }
  else if(attend===false){
    auth="X";
  }
  else{
    auth=" ";
  }
  return(
    <>
    <p className={styles.day}>{day}</p>
    <p className={styles.content}>{content}</p>
    <p className={styles.auth}>
 {auth==="O"||auth===" " ? <p className={styles.true}>{auth}</p> :<p className={styles.false}>{auth}</p>}
  </p>
    </>
  )
}
const Board=({givenAuth,userTaskData,taskData})=>{
  let first_week=[];
  let second_week=[];
  let third_week=[];
  let fourth_week=[];
  let fifth_week=[];
  let last_week=[];

  console.log("givenAuth",givenAuth)
  console.log(userTaskData)
  if(givenAuth.length!=0){
    console.log("in",givenAuth)
    for(let i=0;i<userTaskData[0].status.length;i++){
      if(i==givenAuth[0].day-1||givenAuth[0].day==0){
        userTaskData[0].status[i]=true;
        break;

      }
      else if(userTaskData[0].status[i]==""){
        userTaskData[0].status[i]=false;
        console.log(userTaskData[0].status[i])
      }
    }
    console.log("status after",userTaskData[0].status);
  }
  for(let i=0;i<5;i++){
    first_week.push(
      <div className={styles.content_container}>
        {userTaskData[0].status[i]===true ? <div className={styles.true}>  <Square day={taskData[i].day} attend={userTaskData[0].status[i]} content={taskData[i].content}/> </div>
        : 
        <div className={styles.false}>  <Square day={taskData[i].day} attend={userTaskData[0].status[i]} content={taskData[i].content}/> </div>}
    </div>
    )
  }
  for(let i=5;i<10;i++){
    second_week.push(
      <div className={styles.content_container}>
      {userTaskData[0].status[i]===true ? <div className={styles.true}>  <Square day={taskData[i].day} attend={userTaskData[0].status[i]} content={taskData[i].content}/> </div>
      : 
      <div className={styles.false}>  <Square day={taskData[i].day} attend={userTaskData[0].status[i]} content={taskData[i].content}/> </div>}
  </div>
    )
  }
  for(let i=10;i<15;i++){
    third_week.push(
      <div className={styles.content_container}>
        {userTaskData[0].status[i]===true ? <div className={styles.true}>  <Square day={taskData[i].day} attend={userTaskData[0].status[i]} content={taskData[i].content}/> </div>
        : 
        <div className={styles.false}>  <Square day={taskData[i].day} attend={userTaskData[0].status[i]} content={taskData[i].content}/> </div>}
    </div>
    )
  }
  for(let i=15;i<20;i++){
    fourth_week.push(
      <div className={styles.content_container}>
      {userTaskData[0].status[i]===true ? <div className={styles.true}>  <Square day={taskData[i].day} attend={userTaskData[0].status[i]} content={taskData[i].content}/> </div>
      : 
      <div className={styles.false}>  <Square day={taskData[i].day} attend={userTaskData[0].status[i]} content={taskData[i].content}/> </div>}
  </div>
    )
  }
  for(let i=20;i<25;i++){
    fifth_week.push(
      <div className={styles.content_container}>
      {userTaskData[0].status[i]===true ? <div className={styles.true}>  <Square day={taskData[i].day} attend={userTaskData[0].status[i]} content={taskData[i].content}/> </div>
      : 
      <div className={styles.false}>  <Square day={taskData[i].day} attend={userTaskData[0].status[i]} content={taskData[i].content}/> </div>}
  </div>
    )
  }
  for(let i=25;i<30;i++){
    last_week.push(
      <div className={styles.content_container}>
      {userTaskData[0].status[i]===true ? <div className={styles.true}>  <Square day={taskData[i].day} attend={userTaskData[0].status[i]} content={taskData[i].content}/> </div>
      : 
      <div className={styles.false}>  <Square day={taskData[i].day} attend={userTaskData[0].status[i]} content={taskData[i].content}/> </div>}
  </div>
    )
  }
return(
  <>
  <div className={styles.line_container}>
  {first_week}
  </div>
  <div className={styles.line_container}>
  {second_week}
  </div>
  <div className={styles.line_container}>
  {third_week}
  </div>
  <div className={styles.line_container}>
  {fourth_week}
  </div>
  <div className={styles.line_container}>
  {fifth_week}
  </div>
  <div className={styles.line_container}>
  {last_week}
  </div>
  </>
)

}
export default AttendanceBoard;

