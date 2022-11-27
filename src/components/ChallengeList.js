import React,{useState} from 'react';
import {useNavigate,Link} from 'react-router-dom';
import ChallengeData from '../data/ChallengeData.json';
const ChallengeList=()=>{
  const [attend,setAttend]=useState([]);//인증확인
  console.log("challengeData",ChallengeData.data);
  const gpChallengeData=ChallengeData.data.filter((item)=>
    item.type=='group');
    console.log("gp",gpChallengeData);
  const ivChallengeData=ChallengeData.data.filter((item)=>
  item.type=="indiv");
  console.log("iv",ivChallengeData);
 const navigate=useNavigate();
 function onMoveHandler(){
  navigate("/GroupChallengePage");
}
const checkAuth=(day,name)=>{
  // const now=new Date();
  // const day=now.getDate();
  const tmp_attend={"day":day, "name":name, "attend":true}
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
{ivChallengeData.map((item)=>{
    return(
<li key={item.id}>
{item.name}
{console.log(item.name)}
<button type='button' onClick={()=>checkAuth("10",item.name)}>인증</button> 
{console.log("attend",attend)}
</li>
    )
  }
)}
</React.Fragment>
);
}// checkAuth의 첫 번째 매개변수는 해당 일수로 이건 나중에 변수로 넘겨주기
// 그룹/개인 챌린지 별 리스트 띄워줄 컴포넌트
export default ChallengeList;