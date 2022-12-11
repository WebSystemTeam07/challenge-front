import { fontSize } from "@mui/system";
import Bar from "../components/Bar";

import {useLocation} from "react-router";

import "../scss/register.scss";

function InformationRegister(){
    const location = useLocation()
    let challenge = location.state.challenge
    let challengeTitle = challenge.title

    return(
        <>
        <Bar path="전체 > 그룹챌린지 > 상세 > 공지글 > " content="공지글 작성하기" />
        <p className="part" style={{marginTop:"9.6vh", marginLeft:"19.2vw",color:"#1c8cc9", fontSize:"xx-large", fontWeight:"bold"}}>{challengeTitle}</p>
        <div className="registerContainer">
            <p className="part"style={{fontSize:"xx-large", fontWeight:"bold"}}>공지사항 글쓰기</p>
            <span className="part">
                <p style={{fontSize:"x-large", fontWeight:"bold"}}>제목</p>
                <input className="inputArea" style={{fontSize:"large", borderTop:"none", borderRight:"none", borderLeft:"none"}} placeholder="제목을 입력하세요"/>
            </span>
            <span className="part">
                <p style={{fontSize:"x-large", fontWeight:"bold"}}>글 내용</p>
                <p style={{height:"40vh", marginBottom:"3vh"}}>
                    <textarea className="inputArea" style={{height:"100%"}} placeholder="글 내용을 입력하세요"/>
                </p>
            </span>
            <span className="part">
                <p style={{fontSize:"x-large", fontWeight:"bold"}}>사진 첨부</p>
                <input className="part" type="file" multiple accept=".jpg, .png"/>
            </span>
            <div className="part" style={{margin:"auto"}}>
                <button className="registerPageBtn">다시작성</button>
                <button className="registerPageBtn">등록하기</button>
            </div>
        </div>
        
        </>
    )
}

export default InformationRegister;