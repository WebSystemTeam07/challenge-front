import { Link } from "react-router-dom";
import "./groupChallengeMain.scss";

function ChallengeBoardItem(props){
    let challenge = props.challenge;
    let startDate = challenge.startDate.substr(0,10)
    let endDate = challenge.endDate.substr(0,10)

    return(
        <div>
            <Link to="/groupchallengepage/groupChallengeDetail" state={{challenge:challenge}} className="challengeItemContainer" style={{ textDecoration: "none" }}>
                <img className="challengeImg" src={challenge.imageUrl} alt="이미지가 없습니다." />
                <span className="challengeTextInfo">
                    <div className="challengeTitle">{challenge.title}</div>
                    <div className="tagsContainer">{challenge.tag.map((item)=>(<span className="tag">{item}</span>))}</div>
                    <div>
                        <span className="highlightBlue">{startDate}</span>
                        에 시작해서
                        <span className="highlightBlue"> {challenge.term}일 </span>
                        동안 도전해요!
                    </div> 
                </span>
                <div className="participantsInfo">
                    현재{" "}
                    <span className="highlightBlue">{challenge.member}명{" "}</span>
                    도전 중!
                </div>
            </Link>            
        </div>
    )
}

export default ChallengeBoardItem;