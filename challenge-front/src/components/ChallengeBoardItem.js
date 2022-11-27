
import "../components/groupChallengeMain.scss";

function ChallengeBoardItem(props){
    return(
        <div>
            <span className="challengeItemContainer">
                <img className="challengeImg" src={props.challenge.imageUrl} />
                <span className="challengeTextInfo">
                    <div className="challengeTitle">{props.challenge.title}</div>
                    <div className="tagsContainer">{props.challenge.tag.map((item)=>(<span className="tag">{item}</span>))}</div>
                    <div>
                        <span className="highlightBlue">{props.challenge.startDate}</span>
                        에 시작해서
                        <span className="highlightBlue"> {props.challenge.term}일 </span>
                        동안 도전해요!
                    </div> 
                    <div className="participantsInfo">
                        현재
                        <span className="highlightBlue"> {props.challenge.member.length}명 </span>
                        도전 중!
                    </div>
                </span>
            </span>            
        </div>
    )
}

export default ChallengeBoardItem;