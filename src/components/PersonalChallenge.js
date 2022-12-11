import { useState } from "react";
import styles from "./styles/personal.module.scss";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CheckAuth from "./CheckAuth";
import AttendanceBoard from "./AttendanceBoard";
import ChallengeData from '../data/ChallengeData.json';
import UserData from "./ChallengeUserData";
import ChallengeUserTask from "./ChallengeUserTask";
import ChallengeTask from './ChallengeTask';
import { useCookies } from "react-cookie";
import { useEffect } from "react";
const PersonalChallenge=()=> {
    const [attend,setAttend]=useState([]);//인증확인
    const [open, setOpen] = useState([0]);
    const [personalUserData,setPersonalUserData]=useState([]);
    const [taskStatus,setTaskStatus]=useState([]);
    const [task,setTask]=useState([]);
    const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
    const user =  cookies.userData.id;
    console.log("user cookie",user)
    
    const getUserData=(data)=>{
      setPersonalUserData(data.data.personal);
      console.log(data.data.personal);
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
        setTaskStatus(data);
        console.log("userTaskData",data)
    }
    const getTaskData=(data)=>{
      setTask(data);
      console.log("getTaskData",data)
    }
    return(
        <>
        <div className={styles.group_center}>
        <UserData userId={user} getUserData={getUserData}/>
                {personalUserData&&personalUserData.map((item,idx)=>{
                return(
                  <>
                <div className={styles.text_button_center}>
                    <img src={item.img} alt="샐러드 사진"/>
                      <div className={styles.textBox}>
                      {item.title}<br/>  
                      {console.log("date",new Date(item.startDate).toISOString().split('T')[0])}
                     {new Date(item.startDate).toISOString().split('T')[0]}
                      </div>
                      <ChallengeTask userId={user} getUserData={getTaskData} challengeId={item.id}/>
                  <ChallengeUserTask userId={user} getUserData={getUserTaskData} challengeId={item.id} />
                      <button type="button" onClick={()=>toggleAnswer(idx)} className={styles.button_interval}>{ open[idx] ? <Closed/>: <Opened/>}</button></div>
            { open[idx] ? (
                    <p>{<> 
                      <div className={styles.board_center}>
                        {console.log("attendCheck",attend,task,taskStatus)}
                      <AttendanceBoard attend={attend} task={task} status={taskStatus} challengeId={item.id} startDate={new Date(item.startDate).toISOString().split('T')[0]}/>
                      </div>
                      <div className={styles.auth_button}>
                      <CheckAuth getAuth={getAuth} startDate={new Date(item.startDate).toISOString().split('T')[0]} challengeId={item.id} userId={user}/>
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
