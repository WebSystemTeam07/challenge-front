import "./groupChallengeDetail.scss";

function ChallengeDtailBoard(props){
    const challenge = props.challenge
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
                        <button className="joinBtn">참여하기</button>
                    </div>
                    <div>
                        <span className="ownerData">{challenge.ownerId}</span>
                        <span className="participantsData">{challenge.member.length}명 참여중</span>
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

export default ChallengeDtailBoard;