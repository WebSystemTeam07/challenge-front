import { useState } from "react";
import styles from "./styles/personal.module.scss";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CheckAuth from "./CheckAuth";
import AttendanceBoard from "./AttendanceBoard";
import ChallengeData from '../data/ChallengeData.json';
import UserData from "./ChallengeUserData";
import ChallengeUserTask from "./ChallengeUserTask";
const PersonalChallenge=()=> {
    const [attend,setAttend]=useState([]);//인증확인
    const ivChallengeData=ChallengeData.data.filter((item)=>
    item.type=='personal');
    const [open, setOpen] = useState([0]);
    const [personalUserData,setPersonalUserData]=useState([]);
    const [taskStatus,setTaskStatus]=useState([]);
    const ownerId="14667";
    const tmpChallengeId="15319";
    
    const getUserData=(data)=>{
      console.log(data.data.personal);
      console.log(typeof(data.data.personal))
      setPersonalUserData(data.data.personal);
    }
    const toggleAnswer = (idx) => {
      console.log("idx",idx)
      let tmp_arr=[];
      tmp_arr=[...open];
      console.log(tmp_arr);
      tmp_arr[idx]=!open[idx];
        setOpen(tmp_arr);
    }
    const getAuth=(auth)=>{
      console.log(auth)
      setAttend(auth);
      }
    const Opened=()=>{
      return(
        <>
        달력보기 <ArrowDropDownIcon fontSize="small" />
        </>
      )
    }
    const Closed=()=>{
      return(
        <>
        달력닫기  <ArrowDropUpIcon fontSize="small" />
        </>
      )
    }
    const getUserTaskData=(data)=>{
        console.log("taskData",data.data[0].status);
        setTaskStatus(data.data[0].status);
    }
    return(
        <>
        <div className={styles.group_center}>
        <UserData userId={ownerId} getUserData={getUserData}/>
        <ChallengeUserTask userId={ownerId} getUserData={getUserTaskData} challengeId={tmpChallengeId}/>
                {personalUserData&&personalUserData.map((item,idx)=>{
                return(
                  <>
                <div className={styles.text_button_center}>
                    <img src={item.img} alt="샐러드 사진"/>
                      <div className={styles.textBox}>
                      {item.title}<br/>  
                      {console.log("date",new Date(item.startDate).toISOString().split('T')[0])}
                     {new Date(item.startDate).toISOString().split('T')[0]}
                      {console.log("userId",item.userIds[0].id)}
                      </div>
                      <button type="button" onClick={()=>toggleAnswer(idx)} className={styles.button_interval}>{ open[idx] ? <Closed/>: <Opened/>}</button></div>
            { open[idx] ? (
                    <p>{<>
                      <div className={styles.board_center}>
                        {console.log("attend",attend)}
                        
                      <AttendanceBoard attend={attend} challengeId={item.id} status={taskStatus}/>
                      </div>
                      <div className={styles.auth_button}>
                        
                      <CheckAuth getAuth={getAuth} startDate={item.startDate} challengeId={item.id} userId={item.userIds[0].id}/>
                      </div>
                      </>
                      }</p>
            ) : ("")}
            </>
                    )
                })}
          </div>
      </>
    );

}


export default PersonalChallenge;
