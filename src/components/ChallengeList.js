import React,{useState,useMemo} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import ChallengeData from '../data/ChallengeData.json';
import AttendanceBoard from './AttendanceBoard';
import CheckAuth from './CheckAuth';



const ChallengeList=()=>{
  const [attend,setAttend]=useState([]);//인증확인
  
  const gpChallengeData=ChallengeData.data.filter((item)=>
    item.type=='group');
  const ivChallengeData=ChallengeData.data.filter((item)=>
  item.type=="indiv");
 const navigate=useNavigate();

 function onMoveHandler(){
  navigate("/GroupChallengePage");
}
const getAuth=(auth)=>{
setAttend(auth);
}
return(
  <React.Fragment>
  <h2>그룹챌린지 목록</h2>
  {gpChallengeData.map((item)=>{
    return(
<li key={item.id}>
{item.name}
<button type='button' onClick={onMoveHandler}>그룹 게시판 이동</button>
</li>
    )
  }
)}
<h2>개인챌린지 목록</h2>
<CheckAuth getAuth={getAuth}/>
<AttendanceBoard attend={attend}/>
</React.Fragment>
);
}// checkAuth의 첫 번째 매개변수는 해당 일수로 이건 나중에 변수로 넘겨주기
// 그룹/개인 챌린지 별 리스트 띄워줄 컴포넌트
// 
export default ChallengeList;