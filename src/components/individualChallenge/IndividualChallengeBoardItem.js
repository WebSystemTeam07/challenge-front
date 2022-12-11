import "./individualChallengeMain.scss";
import { NavLink } from "react-router-dom"
import axios from 'axios';
import port from "../../assets/port.json";
import React, { useState } from "react";
import ContentsModal from "./ContentsModal";

function IndividualChallengeBoardItem(props){
    const [modal, setModal] = useState(false); 

    let challenge = props.challenge;
    challenge.startDate = challenge.startDate.substr(0,10)
    challenge.endDate = challenge.endDate.substr(0,10)

    //const [joined, setJoined] = useState(false);
    //const [isLogin, setIsLogin] = useState(true);
    let joined = false;
    let isLogin = true;
    let userId = "15002" // 임시

    // 임시로 contents 바꿈. task 생성 위함.
    challenge.contents = "제목에 색깔이 들어가는 노래 / 제목에 숫자가 들어가는 노래 / 여름이 생각나는 노래 / 잊고 싶은 누군가를 떠올리게 하는 노래 / 크게 틀어놓고 들어야하는 노래 / 춤추고 싶어지는 노래 / 드라이브할 때 듣기 좋은 노래 / 술에 관한 노래 / 행복하게 만드는 노래 / 슬프게 만드는 노래 / 질리지 않는 노래 / 초등학생때 많이 듣던 노래 / 좋아하는 7080노래 / 축가로 듣고 싶은 노래 / 좋아하는 커버곡 / 클래식 노래 / 듀엣 노래 / 태어난 해에 발매된 노래 / 인생에 대해 생각하게 하는 노래 / 나에게 많은 의미가 있는 노래 / 제목에 사람 이름이 들어간 노래 / 힘을 주는 노래 / 추천하고 싶은 노래 / 해체한 그룹의 노래 / 세상을 떠난 가수의 노래 / 마음아픈 노래 / 취향저격 음색의 노래 / 자아성찰할 수 있는 노래 / 사랑에 빠지고 싶게하는 노래"
    let contents30List =  challenge.contents.split(" / ")

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

    function showContentsModal(){
        setModal(true);
    }

    return(
        <>
        <div className="challengeItemContainer" >
            <img className="challengeImg" src={challenge.imageUrl} alt="이미지가 없습니다." />
            <span className="challengeTextInfo">
                <div className="challengeTitle">{challenge.title}</div>
                <div className="tagsContainer">{challenge.tag.map((item)=>(<span className="tag">{item}</span>))}</div>
                <div>
                    오늘{" "}시작해서
                    <span className="highlightBlue"> 30일 </span>
                        동안
                    <span className="highlightBlue">{challenge.endDate}</span>까지 도전해요!
                </div> 
            </span>
            <div className="participantsInfo">
                        현재{" "}
                        <span className="highlightBlue">{challenge.member}명{" "}</span>
                        도전 중!
            </div>
        </div>
        <span style={{margin:"0 19.2vw"}}>
            <button className="individualComponentBtn" id="joinBtn" onClick={joinChallenge}>도전할래요!</button>
            <button className="individualComponentBtn" onClick={showContentsModal} >챌린지 내용 확인하기</button>
            {modal && <ContentsModal setModal={setModal} taskList={contents30List}/>}
        </span>
        </>
    )
}

export default IndividualChallengeBoardItem;
//challenge.contents