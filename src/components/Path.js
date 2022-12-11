import "./groupChallenge/groupChallengeMain.scss";

function Path(props){
    const path = props.path
    return(
        <div className="pathContainer">
            <span>{path}</span>
        </div>
    )
}

export default Path;