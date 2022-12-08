import ChallengeData from '../data/ChallengeData.json';
import { useNavigate } from 'react-router-dom';
import styles from './styles/personal.module.scss';

const GroupChallenge=()=>{
  const gpChallengeData=ChallengeData.data.filter((item)=>
    item.type=="group")
    const navigate=useNavigate();

 function onMoveHandler(){
  navigate("/GroupChallengePage");
}
  return(
    <>
    <div className={styles.group_center}>
    {gpChallengeData.map((item)=>{
      return(
  <li key={item.id} className={styles.list}>
   <img src={item.imageUrl} alt={"대체사진"}/>
   <div className={styles.textBox}>
  {item.title}
  </div>
  <button type='button' className={styles.group_button} onClick={onMoveHandler}>그룹 게시판 이동</button>
  </li>
      )
    }
  )}
  </div>
  </>
  )
  
}
export default GroupChallenge;