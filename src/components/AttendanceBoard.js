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
  if(givenAuth.givenAuth!=undefined){
    for(let i=0;i<personData.length;i++){
      if(i==givenAuth.givenAuth.day-1){
        personData[i].attend="O";
        break;
      }
      if(personData[i].attend==""){
        personData[i].attend="X";
      }
    }
  }
  for(let i=0;i<5;i++){
    if(givenAuth.givenAuth!=undefined){
    if(i==givenAuth.givenAuth.day-1){
      personData[i].attend="O";
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
    }}
    fifth_week.push(
      <div className="flex_container">
    <Square day={personData[i].day} attend={personData[i].attend}/>
    </div>
    )
  }
  for(let i=25;i<30;i++){
    if(givenAuth.givenAuth!=undefined){
    if(i==givenAuth.givenAuth.day-1){
      personData[i].attend="O";
    }
  }
    last_week.push(
      <div className="flex_container">
    <Square day={personData[i].day} attend={personData[i].attend}/>
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

