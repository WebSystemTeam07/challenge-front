import "./groupChallengeDetail.scss";   

import axios from 'axios';
import port from "../../assets/port.json";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import { useCookies} from "react-cookie";


function ChallengeDetailBoard(props){
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['userData']);

    let challenge = props.challenge
    let startDate = challenge.startDate.substr(0,10)
    let endDate = challenge.endDate.substr(0,10)
    
    // 이미 join한 상태인지 아닌지 판별
    function checkJoin(){
        let tmpUserIds = []
        for(const idx of Object.keys(challenge.userIds)){
            tmpUserIds = [...tmpUserIds, challenge.userIds[idx].id]
        }
        
        if(cookies.userData != undefined){
            if(tmpUserIds.indexOf(cookies.userData.id) >=0 ){
                // 이미 참여중임
                return true
            }else{
                // 참여안함.
                return false
            }
        }else{
            return false;
        }
    }

    const [joined, setJoined] = useState(checkJoin)
    
    async function postChallengeJoin(userId) {
        return await axios.post(port.url + '/challenge/join', {"userId" : userId, "challengeId":challenge.id})
    }

    function joinChallenge(){
        // 로그인 안된 상태
        if(cookies.userData == undefined){
            console.log("로그인 안된 상태")
            alert("로그인해야 이용 가능한 서비스입니다");
        }
        // 로그인 된 상태 
        else {
            if(!joined){
                // 처음 참여
                postChallengeJoin(cookies.userData.id)
                setJoined(true)
            } else {
                // 이미 참여중. 그룹 게시판으로 이동해야함
                console.log("참여중인 챌린지입니다. 그룹게시판으로 이동합니다.")
                navigate("/groupchallengepage/board", {state:{challengeId:challenge.id}})
            }
            
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
                            { !joined && "참여하기"}
                            { joined && "그룹게시판 이동하기"}
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