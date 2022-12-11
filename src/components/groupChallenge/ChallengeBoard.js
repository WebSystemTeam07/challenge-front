import "./groupChallengeMain.scss";

import React, {useState} from "react"

import ChallengeBoardItem from "./ChallengeBoardItem";
import ChallengeCategoryFilter from "./ChallengeCategoryFilter";
import { useNavigate } from "react-router-dom";


const categories = ["전체", "운동", "생활", "취미", "공부"];

function ChallengeBoard(props){
    const [category, setCategory] = useState("전체");
    const navigate = useNavigate();

    function onCreateGroupChallenge(){
        console.log("챌린지생성 버튼 클릭")
        navigate("/newchallenge")
    }

    return(
        <span className="groupChallengeBoardContainer">
            <span className="groupChallengeBoardHeader">
                <span className="categoryPath"> 그룹 챌린지 {'>'} {category}</span>
                <button className="challengeCreateBtn" onClick={onCreateGroupChallenge}>챌린지 생성하기</button>
                
            </span>
            <span className="groupChallengeCategories">
                {categories.map((item) => (<span className={category == item ? "categorySelected": "categoryName"} onClick={()=>{setCategory(item)}}>{item}</span>))}
            </span>
            <ChallengeCategoryFilter categories={categories} category={category} setCategory={setCategory} challengeData={props.challengeData}/>
        </span>
    )
}

export default ChallengeBoard;
