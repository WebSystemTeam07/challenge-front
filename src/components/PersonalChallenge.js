import { useState } from "react";
import "./PersonalChallenge.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CheckAuth from "./CheckAuth";
import AttendanceBoard from "./AttendanceBoard";

function Question() {
    const [open, setOpen] = useState(0);
    const [attend,setAttend]=useState([]);//인증확인

    const toggleAnswer = () => {
        setOpen(open => !open);
    }
    const getAuth=(auth)=>{
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
                <div>
                <h2>개인챌린지 목록</h2>
                    <p className="text_button_center">
                    <img src="https://www.kfoodtimes.com/news/photo/202004/10750_20581_367.png" alt="샐러드 사진"/>
                      <div className="textBox">
                      프로젝트 이름  
                      </div>
                      <pre>{"                                "}</pre>
                      <pre>{"                                "}</pre>
                      <button type="button" onClick={toggleAnswer} className="button_interval">{ open ? <Closed/>: <Opened/>}</button></p>
                </div>
            { open ? (
                <div>
                    <p>{<>
                      <div className="board">
                      <div className="board_center">
                      <AttendanceBoard attend={attend}/>
                      </div>
                      <div className="flex">
                      <CheckAuth getAuth={getAuth}/>
                      </div>
                      </div>
                      </>
                      }</p>
                </div>
            ) : ("")}

      </>

    );

}


export default Question;
