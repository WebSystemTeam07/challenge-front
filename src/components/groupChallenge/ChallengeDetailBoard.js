import "./groupChallengeDetail.scss";

import axios from 'axios';
import port from "../../assets/port.json";


function ChallengeDetailBoard(props){
    let challenge = props.challenge
    let isLogin = true;
    let userId = "15002" // 임시
    
    async function postChallengeJoin(userId) {
        return await axios.post(port.url + '/challenge/join', {"userId" : userId, "challengeId":challenge.id})
    }

    function joinChallenge(){
        if(isLogin){
            postChallengeJoin(userId)
            .then((res)=>{
                console.log(res.data.result)
            })
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
                        <button className="joinBtn" onClick={joinChallenge}>참여하기</button>
                    </div>
                    <div>
                        <span className="ownerData">{challenge.ownerId}</span>
                        <span className="participantsData">{challenge.member}명 참여중</span>
                    </div>
                    <div style={{marginTop:"5px", color:"#1c8cc9"}}>
                        {challenge.startDate} ~ {challenge.startDate}
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