import Bar from "../components/Bar";

import "../components/styles/register.scss";
import axios from 'axios';
import port from "../assets/port.json"

import {useLocation} from "react-router";


function CertificationRegister(props){
    const location = useLocation()
    let challenge = location.state.challenge
    let challengeTitle = challenge.title;
    let nowDate = new Date();
    let today= `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`; // 오늘 날짜
    let method_photo = (challenge.method == "photo") ? true: false;
    let method_text = (challenge.method == "text") ? true: false;
    
    // 임시 userId
    let userId = "15002"
    // 인증글 제목 / 내용
    let title = "";
    let contents = "";

    function calculDay(){
        // 오늘 - 시작 날짜 + 1
        let diff = (nowDate.getTime() - challenge.startDate.getTime()) / (1000*60*60*24)
        diff = Math.floor(diff+1)
        return diff;
    }

    async function postCertification(userId) {
        return await axios.post(port.url + '/task/' + challenge.id, {
            "userId" : userId,
            "day" : calculDay(),
            "title": title,
            "contents":contents,
            "date":nowDate,
        })
    }

    function onCertifiRegist(){
        postCertification(userId)
        .then((res)=>{
            console.log(res.data) 
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <>
        <Bar path="전체보기 > 그룹챌린지 > 상세 > 인증글 > " content="인증글 작성하기" />
        <p className="part" style={{marginTop:"9.6vh", marginLeft:"19.2vw",color:"#1c8cc9", fontSize:"xx-large", fontWeight:"bold"}}>{challengeTitle}</p>
        <p style={{marginLeft:"19.2vw",color:"#1c8cc9", fontSize:"x-large", fontWeight:"bold"}}>{today}</p>
        <div className="registerContainer">
            <p style={{fontSize:"xx-large", fontWeight:"bold"}}>인증 글쓰기</p>
            <div className="part">
                <sapn style={{marginRight:"15px", color:"#1c8cc9", fontSize:"medium"}}>{challenge.method}로 인증해요!</sapn>
            </div>
            <span className="part">
                <p style={{fontSize:"x-large", fontWeight:"bold"}}>제목</p>
                <input className="inputArea" style={{fontSize:"large", borderTop:"none", borderRight:"none", borderLeft:"none"}} placeholder="제목을 입력하세요" onChange={(e)=> (title = e.target.value)}/>
            </span>
            {
                method_text && 
                <span className="part">
                    <p style={{fontSize:"x-large", fontWeight:"bold"}}>글 내용</p>
                    <p style={{height:"40vh", marginBottom:"3vh"}}>
                        <textarea className="inputArea" style={{height:"100%"}} placeholder="글 내용을 입력하세요" onChange={(e)=>(contents = e.target.value)}/>
                    </p>
                </span>
            }
            {
                method_photo &&
                <span className="part">
                    <p style={{fontSize:"x-large", fontWeight:"bold"}}>사진 첨부</p>
                    <input className="part" type="file" accept=".jpg, .png" onChange={(e)=>(contents = e.target.value)}/>
                </span>
            }
            <div className="part" style={{margin:"auto"}}>
                <button className="registerPageBtn" onClick={onCertifiRegist}>등록하기</button>
            </div>
        </div>
        </>
    )
}

export default CertificationRegister;