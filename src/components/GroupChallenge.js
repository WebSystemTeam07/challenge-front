import ChallengeData from '../data/ChallengeData.json';
import { useNavigate } from 'react-router-dom';
const GroupChallenge=()=>{
  const gpChallengeData=ChallengeData.data.filter((item)=>
    item.type=='group')
    const navigate=useNavigate();

 function onMoveHandler(){
  navigate("/GroupChallengePage");
}
  return(
    <>
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
  </>
  )
  
}
export default GroupChallenge;