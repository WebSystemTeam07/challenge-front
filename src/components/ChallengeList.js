import React,{useState,useMemo} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import ChallengeData from '../data/ChallengeData.json';
import AttendanceBoard from './AttendanceBoard';



const ChallengeList=()=>{
  const [attend,setAttend]=useState([]);//인증확인
  const startDate="2022-11-05";
  
  const gpChallengeData=ChallengeData.data.filter((item)=>
    item.type=='group');
    console.log("gp",gpChallengeData);
  const ivChallengeData=ChallengeData.data.filter((item)=>
  item.type=="indiv");
 const navigate=useNavigate();

 function onMoveHandler(){
  navigate("/GroupChallengePage");
}

const checkAuth=(startDate)=>{
  const now=new Date();
  let year = now.getFullYear();  
  let month = now.getMonth()+1;      
  let date = now.getDate(); 
  console.log(now)
  let startDate_arr=startDate.split("-");
  console.log(startDate_arr[0],startDate_arr[1],startDate_arr[2])
  let stDate=new Date(startDate_arr[0],startDate_arr[1],startDate_arr[2]);
  let today=new Date(year,month,date);
  let day=(today.getTime()-stDate.getTime())/(1000*60*60*24);
  const tmp_attend={"day":day,"attend":true}
  console.log(tmp_attend);
  setAttend([...attend,tmp_attend]);
}

return(
  <React.Fragment>
  <h2>그룹챌린지 목록</h2>
  {gpChallengeData.map((item)=>{
    return(
<li key={item.id}>
{item.name}
{console.log(item.name)}
<button type='button' onClick={onMoveHandler}>그룹 게시판 이동</button>
</li>
    )
  }
)}
<h2>개인챌린지 목록</h2>
<button type='button' onClick={(e)=>{
  checkAuth(startDate);
  e.currentTarget.disabled=true;
}}>인증</button> 

<AttendanceBoard attend={attend}/>
</React.Fragment>
);
}// checkAuth의 첫 번째 매개변수는 해당 일수로 이건 나중에 변수로 넘겨주기
// 그룹/개인 챌린지 별 리스트 띄워줄 컴포넌트
// 
export default ChallengeList;