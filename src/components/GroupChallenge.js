import ChallengeData from '../data/ChallengeData.json';
import { useNavigate } from 'react-router-dom';
import './styles/GroupChallenge.css';

const GroupChallenge=()=>{
  const gpChallengeData=ChallengeData.data.filter((item)=>
    item.type=="group")
    const navigate=useNavigate();

 function onMoveHandler(){
  navigate("/GroupChallengePage");
}
  return(
    <>
    <div className='group_title'>
    <h2>참여 중인 챌린지</h2>
    <div className='group_center'>
    {gpChallengeData.map((item)=>{
      return(
  <li key={item.id} className="list">
   <img src={item.imageUrl} alt={"대체사진"}/>
   <div className='textBox'>
  {item.title}
  </div>
  <button type='button' className='group_button' onClick={onMoveHandler}>그룹 게시판 이동</button>
  </li>
      )
    }
  )}
  </div>
  </div>
  </>
  )
  
}
export default GroupChallenge;