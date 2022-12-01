import Card from './Card';
import React,{useEffect, useState} from 'react';
import {useTable} from 'react-table';
import './AttendanceBoard.css';
import data from '../data/PeronalChallengeData.json';
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
  let auth;
  if(attend=='O'){
    auth="O";
  }
  else if(attend=='X'){
    auth="X";
  }
  else{
    auth="";
  }
  return(
    <>
    <p>{day}</p>
    <p>{auth}</p>
    </>
  )
}
const Board=(givenAuth)=>{
  console.log("board",givenAuth.givenAuth)
  let first_week=[];
  let second_week=[];
  let third_week=[];
  let fourth_week=[];
  let fifth_week=[];
  let last_week=[];
  const personData=data.data;
  console.log(personData)
  console.log(givenAuth.givenAuth)
  for(let i=0;i<5;i++){
    if(givenAuth.givenAuth!=undefined){
    if(i==givenAuth.givenAuth.day-1){
      personData[i].attend="O";
      console.log("changed!");
    }}
    first_week.push(
      <div className="flex_container">
    <Square day={personData[i].day} attend={personData[i].attend}/>
    </div>
    )
  }
  for(let i=5;i<10;i++){
    if(givenAuth.givenAuth!=undefined){
    if(i==givenAuth.givenAuth.day-1){
      personData[i].attend="O";
      console.log("changed!");
    }}
    second_week.push(
      <div className="flex_container">
    <Square day={personData[i].day} attend={personData[i].attend}/>
    </div>
    )
  }
  for(let i=10;i<15;i++){
    if(givenAuth.givenAuth!=undefined){
    if(i==givenAuth.givenAuth.day-1){
      personData[i].attend="O";
      console.log("changed!");
    }}
    third_week.push(
      <div className="flex_container">
    <Square day={personData[i].day} attend={personData[i].attend}/>
    </div>
    )
  }
  for(let i=15;i<20;i++){
    if(givenAuth.givenAuth!=undefined){
    if(i==givenAuth.givenAuth.day-1){
      personData[i].attend="O";
      console.log("changed!");
    }}
    fourth_week.push(
      <div className="flex_container">
    <Square day={personData[i].day} attend={personData[i].attend}/>
    </div>
    )
  }
  for(let i=20;i<25;i++){
    if(givenAuth.givenAuth!=undefined){
    if(i==givenAuth.givenAuth.day-1){
      personData[i].attend="O";
      console.log("changed!");
    }}
    fifth_week.push(
      <div className="flex_container">
    <Square day={personData[i].day} attend={personData[i].attend}/>
    </div>
    )
  }
  for(let i=25;i<30;i++){
    if(givenAuth.givenAuth!=undefined){
    console.log("i",i,givenAuth.givenAuth.day-1)
    if(i==givenAuth.givenAuth.day-1){
      personData[i].attend="O";
      console.log("changed!");
    }
  }
    last_week.push(
      <div className="flex_container">
    <Square day={personData[i].day} attend={personData[i].attend}/>
    </div>
    )
  }
  console.log(typeof(fifth_week))
  console.log(fifth_week[4])
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

