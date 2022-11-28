import "../components/groupChallengeDetail.scss";

function ChallengeDtailBoard(props){
    const challenge = props.challenge
    return(
        <div className="detailBoardContainer">
            <img className="detailBoardImage" src={challenge.imageUrl}/>
            <span className="detailBoardTagContainer">
                <span className="detailBoardHeader">
                    <div className="detailBoardTagContainer">
                        {
                        challenge.tag.map((item)=>(
                            <span className="detailBoardTag">#{item}</span>
                        ))
                        }
                    </div>
                    <div className="detailBoardTitle">{challenge.title}</div>
                    <div>
                        <span className="ownerData">{challenge.ownerId}</span>
                        <span className="participantsData">{challenge.member.length}명 참여중</span>
                    </div>
                    <button className="joinBtn">참여하기</button>
                </span>
                <span className="detailBoardContents">
                    <span className="challengeIntro">
                        <div className="detailBoardSubTitle">챌린지 소개</div>
                        <div></div>
                    </span>
                    <span className="challengeCertifiMethod">
                        <span className="detailBoardSubTitle">챌린지 방법</span>
                    </span>
                </span>
            </span>
        </div>
    )
}

export default ChallengeDtailBoard;