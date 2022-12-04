import React,{useEffect, useState} from 'react';
import './AttendanceBoard.css';
import authData from '../data/userTaskData.json';
import dailyData from '../data/taskData.json';
const AttendanceBoard=(attend)=>{
  console.log("attend",attend)
  useEffect(()=>{
    <Board givenAuth={attend.attend[0]}/>
  },[attend])
 return(
  <Board givenAuth={attend.attend[0]}/>
 )
}
const Square=({day,attend})=>{
  console.log({day,attend})
  let auth;
  if(attend===true){
    auth="O";
  }
  else if(attend===false){
    auth="X";
  }
  else{
    auth="";
  }
  return(
    <>
    <p className='day'>{day}</p>
    <p className='auth'>{auth}</p>
    </>
  )
}
const Board=(givenAuth)=>{
  let first_week=[];
  let second_week=[];
  let third_week=[];
  let fourth_week=[];
  let fifth_week=[];
  let last_week=[];
  const userTaskData=authData.userTask;
  console.log("personData",userTaskData)
  const taskData=dailyData.task;
  console.log("taskData",taskData)

  console.log("givenAuth",givenAuth.givenAuth)
  if(givenAuth.givenAuth!=undefined){
    console.log("in")
    for(let i=0;i<userTaskData.length;i++){
      if(i==givenAuth.givenAuth.day-1){
        userTaskData[0].status[i]=true;
        break;
      }
      if(userTaskData[0].status[i]==""){
        userTaskData[0].status[i]=false;
      }
    }
  }
  for(let i=0;i<5;i++){
    first_week.push(
      <div className="flex_container">
    <Square day={taskData[i].day} attend={userTaskData[0].status[i]}/>
    </div>
    )
  }
  for(let i=5;i<10;i++){
    second_week.push(
      <div className="flex_container">
    <Square day={taskData[i].day} attend={userTaskData[0].status[i]}/>
    </div>
    )
  }
  for(let i=10;i<15;i++){
    third_week.push(
      <div className="flex_container">
   <Square day={taskData[i].day} attend={userTaskData[0].status[i]}/>
    </div>
    )
  }
  for(let i=15;i<20;i++){
    fourth_week.push(
      <div className="flex_container">
   <Square day={taskData[i].day} attend={userTaskData[0].status[i]}/>
    </div>
    )
  }
  for(let i=20;i<25;i++){
    fifth_week.push(
      <div className="flex_container">
    <Square day={taskData[i].day} attend={userTaskData[0].status[i]}/>
    </div>
    )
  }
  for(let i=25;i<30;i++){
    last_week.push(
      <div className="flex_container">
    <Square day={taskData[i].day} attend={userTaskData[0].status[i]}/>
    </div>
    )
  }
return(
  <>
  <div className='flex'>
  {first_week}
  </div>
  <div className='flex'>
  {second_week}
  </div>
  <div className='flex'>
  {third_week}
  </div>
  <div className='flex'>
  {fourth_week}
  </div>
  <div className='flex'>
  {fifth_week}
  </div>
  <div className='flex'>
  {last_week}
  </div>
  </>
)

}
export default AttendanceBoard;

