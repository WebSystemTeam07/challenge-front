import { fontSize } from "@mui/system";
import Bar from "../components/Bar";

import {useLocation} from "react-router";

import "../components/styles/register.scss";
import axios from 'axios';
import port from "../assets/port.json"

function InformationRegister(){
    const location = useLocation()
    let challenge = location.state.challenge
    let challengeTitle = challenge.title
    let date = new Date();

    // 임시 userId
    let userId = "15002"
    // 공지글 제목 / 내용
    let title = "";
    let contents = "";

    async function postInformation(userId) {
        return await axios.post(port.url + '/post/' + challenge.id, {
            "userId" : userId,
            "title": title,
            "contents":contents,
            "date":date,
        })
    }

    function onInfoRegist(){
        postInformation(userId)
        .then((res) => {
            console.log(res.data.result)
        })
                .catch(()=>{
            console.log(challenge.id)
        })
    }

    return(
        <>
        <Bar path="전체보기 > 그룹챌린지 > 상세 > 공지글 > " content="공지글 작성하기" />
        <p className="part" style={{marginTop:"9.6vh", marginLeft:"19.2vw",color:"#1c8cc9", fontSize:"xx-large", fontWeight:"bold"}}>{challengeTitle}</p>
        <div className="registerContainer">
            <p className="part"style={{fontSize:"xx-large", fontWeight:"bold"}}>공지사항 글쓰기</p>
            <span className="part">
                <p style={{fontSize:"x-large", fontWeight:"bold"}}>제목</p>
                <input className="inputArea" style={{fontSize:"large", borderTop:"none", borderRight:"none", borderLeft:"none"}} placeholder="제목을 입력하세요" onChange={(e)=> (title = e.target.value)}/>
            </span>
            <span className="part">
                <p style={{fontSize:"x-large", fontWeight:"bold"}}>글 내용</p>
                <p style={{height:"40vh", marginBottom:"3vh"}}>
                    <textarea className="inputArea" style={{height:"100%"}} placeholder="글 내용을 입력하세요" onChange={(e)=>(contents = e.target.value)}/>
                </p>
            </span>
            <span className="part">
                <p style={{fontSize:"x-large", fontWeight:"bold"}}>사진 첨부</p>
                <input className="part" type="file" accept=".jpg, .png" onChange={(e)=>(contents = e.target.value)}/>
            </span>
            <div className="part" style={{margin:"auto"}}>
                <button className="registerPageBtn" onClick={onInfoRegist}>등록하기</button>
            </div>
        </div>
        
        </>
    )
}

export default InformationRegister;