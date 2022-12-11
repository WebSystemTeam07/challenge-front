//import "groupChallengeDetail.scss"

import axios from 'axios';
import port from "../../assets/port.json";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


function ChallengeDetailBoard(props){
    const navigate = useNavigate();
    const [joinBtn, setJoinBtn] = useState("참여하기");
    

    let challenge = props.challenge
    let isLogin = true;
    let userId = "15002" // 임시
    let startDate = challenge.startDate.substr(0,10)
    let endDate = challenge.endDate.substr(0,10)
    
    async function postChallengeJoin(userId) {
        return await axios.post(port.url + '/challenge/join', {"userId" : userId, "challengeId":challenge.id})
    }

    function joinChallenge(){
        if(isLogin){
            if(joinBtn == "참여하기"){
                postChallengeJoin(userId)
                .then((res)=>{
                    setJoinBtn("그룹게시판 이동");
                    console.log(res.data.result)
                })
            }if(joinBtn == "그룹게시판 이동"){
                navigate("/groupchallengepage/board", {state:{challengeId:challenge.id}})
            }
        }else{
            alert("로그인해야 이용 가능한 서비스입니다");
        }
    }

    return(
        <div className="detailBoardContainer">
            <img className="detailBoardImage" src={challenge.imageUrl}/>
                <span className="detailBoardHeader">
                    <div className="detailBoardTagContainer">
                        {
                        challenge.tag.map((item)=>(
                            <span className="detailBoardTag">#{item}</span>
                        ))
                        }
                    </div>
                    <div>
                        <span className="detailBoardTitle">{challenge.title}</span>
                        <button className="joinBtn" onClick={joinChallenge}>
                            {joinBtn}
                        </button>
                    </div>
                    <div>
                        <span className="ownerData">{challenge.ownerId}</span>
                        <span className="participantsData">{challenge.member}명 참여중</span>
                    </div>
                    <div style={{marginTop:"5px", color:"#1c8cc9"}}>
                        {startDate} ~ {endDate}
                    </div>
                </span>
                
                <span className="challengeDetailContents">
                    <span className="challengeIntro">
                        <div className="detailBoardSubTitle">챌린지 소개</div>
                        <div className="introContents">{challenge.contents}</div>
                    </span>
                    <span className="challengeCertifiMethod">
                        <div className="detailBoardSubTitle">챌린지 방법</div>
                        <div className="methodContents">{challenge.method}</div>
                    </span>
                </span>
        </div>
    )
}

export default ChallengeDetailBoard;