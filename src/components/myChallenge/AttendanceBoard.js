import React,{useEffect, useState} from 'react';
import styles from '../styles/attend.module.scss';

const AttendanceBoard=({attend,task,status,challengeId,startDate})=>{
  //  const userTaskData=authData.userTask.filter((item)=>item.challengeId==challengeId);
  // console.log("personData before",userTaskData)
  // console.log("challengeId",challengeId);
  // const taskData=dailyData.task.filter((item)=>item.challengeId==challengeId);
  // console.log("taskData",taskData)
  // console.log("attend challengeId",attend,challengeId)
  const filteredAttend=attend.filter((item)=>item.id==challengeId)
  console.log("filter",filteredAttend)
  console.log("task",task,status)
  console.log("startDate",startDate,challengeId)

  const filteredStatus=status.filter((item)=>item.data[0].challengeId==challengeId)
    let contentData=[];
    const filteredTask=task.filter((item)=>item.data[0].userTaskId==filteredStatus[0].data[0].id)
 filteredTask[0].data.map((item)=>{
    contentData.push({"day":item.day,"content":item.contents});
  })
  console.log("contetnData in main",contentData)
  console.log("status",task,status)
  console.log("filtered",filteredStatus,filteredStatus[0].data[0].status)
  useEffect(()=>{
    <Board givenAuth={filteredAttend} status={filteredStatus[0].data[0].status} contentData={contentData} startDate={startDate}/>
  },[status,filteredAttend])
 return(
  <Board givenAuth={filteredAttend} status={filteredStatus[0].data[0].status} contentData={contentData} startDate={startDate}/>
 )
}
const Square=({day,attend,content,startDate})=>{
  let auth;
  const now=new Date();
  let year = now.getFullYear();  
  let month = now.getMonth();      
  let date = now.getDate(); 
  startDate=String(startDate)
  let startDate_arr=startDate.split("-");
  let compDate=new Date(startDate_arr[0],startDate_arr[1]-1,Number(startDate_arr[2])+Number(day)-1);
  let today=new Date(year,month,date);
  console.log("attend in Square",attend)
  console.log("today",today,compDate,today>compDate)
  if(attend==='T'){
    auth="O";
  }
  else if(attend==='F'||today>compDate){
    auth="X";
    attend='F';
    console.log("in");
  }
  else{
    auth=" ";
  }
  return(
    <>
    <div className={styles.board}>
    <p className={styles.day}>{day}</p>
    <p className={styles.content}>{content}</p>
    <p className={styles.auth}>
 {auth==="O"||auth===" " ? <p className={styles.check}>{auth}</p> :<p className={styles.noncheck}>{auth}</p>}
  </p>
  </div>
    </>
  )
}
const Board=({givenAuth,status,contentData,startDate})=>{
  let first_week=[];
  let second_week=[];
  let third_week=[];
  let fourth_week=[];
  let fifth_week=[];
  let last_week=[];
  console.log("contentData",contentData)
  console.log("givenAuth",givenAuth)
  console.log("before",status)
  if(givenAuth.length!=0){
    console.log("in",givenAuth)
    status[givenAuth[0].day-1]='T';
    // for(let i=0;i<status.length;i++){
    //   if(i==givenAuth[0].day-1||givenAuth[0].day==0){
    //     status[i]='T';
    //     break;

    //   }
    //   else if(status[i]==""){
    //     status[i]='F';
    //   }
    // }
    // console.log("status after",status);
  }
  for(let i=0;i<5;i++){
    first_week.push(
      <div className={styles.content_container}>
         {console.log("status",status[i])}
        {status[i]==='T' ? <div className={styles.true}>  <Square day={contentData[i].day} attend={status[i]} content={contentData[i].content} startDate={startDate}/> </div>
        : 
        <div className={styles.false}>  <Square day={contentData[i].day} attend={status[i]} content={contentData[i].content} startDate={startDate}/> </div>}
    </div>
    )
  }
  for(let i=5;i<10;i++){
    second_week.push(
      <div className={styles.content_container}>
        {console.log("status",status[i])}
      {status[i]==='T' ? <div className={styles.true}>  <Square day={contentData[i].day} attend={status[i]} content={contentData[i].content} startDate={startDate}/> </div>
      : 
      <div className={styles.false}>  <Square day={contentData[i].day} attend={status[i]} content={contentData[i].content} startDate={startDate}/> </div>}
  </div>
    )
  }
  for(let i=10;i<15;i++){
    third_week.push(
      <div className={styles.content_container}>
        {status[i]==='T' ? <div className={styles.true}>  <Square day={contentData[i].day} attend={status[i]} content={contentData[i].content} startDate={startDate}/> </div>
        : 
        <div className={styles.false}>  <Square day={contentData[i].day} attend={status[i]} content={contentData[i].content} startDate={startDate}/> </div>}
    </div>
    )
  }
  for(let i=15;i<20;i++){
    fourth_week.push(
      <div className={styles.content_container}>
      {status[i]==='T' ? <div className={styles.true}>  <Square day={contentData[i].day} attend={status[i]} content={contentData[i].content} startDate={startDate}/> </div>
      : 
      <div className={styles.false}>  <Square day={contentData[i].day} attend={status[i]} content={contentData[i].content} startDate={startDate}/> </div>}
  </div>
    )
  }
  for(let i=20;i<25;i++){
    fifth_week.push(
      <div className={styles.content_container}>
      {status[i]==='T' ? <div className={styles.true}>  <Square day={contentData[i].day} attend={status[i]} content={contentData[i].content} startDate={startDate}/> </div>
      : 
      <div className={styles.false}>  <Square day={contentData[i].day} attend={status[i]} content={contentData[i].content} startDate={startDate}/> </div>}
  </div>
    )
  }
  for(let i=25;i<30;i++){
    last_week.push(
      <div className={styles.content_container}>
      {status[i]==='T' ? <div className={styles.true}>  <Square day={contentData[i].day} attend={status[i]} content={contentData[i].content} startDate={startDate}/> </div>
      : 
      <div className={styles.false}>  <Square day={contentData[i].day} attend={status[i]} content={contentData[i].content} startDate={startDate}/> </div>}
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

