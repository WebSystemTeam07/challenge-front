import { useState } from "react";
import styles from "./styles/personal.module.scss";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CheckAuth from "./CheckAuth";
import AttendanceBoard from "./AttendanceBoard";
import ChallengeData from '../data/ChallengeData.json';

const PersonalChallenge=()=> {
    const [attend,setAttend]=useState([]);//인증확인
    const ivChallengeData=ChallengeData.data.filter((item)=>
    item.type=='personal');
    const [open, setOpen] = useState([0]);
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
    return(
        <>
        <div className={styles.group_center}>
                {ivChallengeData.map((item,idx)=>{
                return(
                  <>
                <div className={styles.text_button_center}>
                    <img src={item.img} alt="샐러드 사진"/>
                      <div className={styles.textBox}>
                      {item.title}<br/>  
                      {item.startDate}
                      </div>
                      <button type="button" onClick={()=>toggleAnswer(idx)} className={styles.button_interval}>{ open[idx] ? <Closed/>: <Opened/>}</button></div>
            { open[idx] ? (
                    <p>{<>
                      <div className={styles.board_center}>
                        {console.log("attend",attend)}
                        
                      <AttendanceBoard attend={attend} challengeId={item.id}/>
                      </div>
                      <div className={styles.auth_button}>
                      <CheckAuth getAuth={getAuth} startDate={item.startDate} id={item.id}/>
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
