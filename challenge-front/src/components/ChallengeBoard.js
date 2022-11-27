import "../components/groupChallengeMain.scss";

import React, {useState} from "react"

import ChallengeBoardItem from "./ChallengeBoardItem";
import ChallengeCategoryFilter from "./ChallengeCategoryFilter";


const categories = ["전체", "운동", "식습관", "취미", "환경", "뷰티", "마음건강"];

function ChallengeBoard(props){
    const [category, setCategory] = useState("전체");

    return(
        <span className="groupChallengeBoardContainer">
            <span className="groupChallengeBoardHeader">
                <span className="categoryPath"> 그룹 챌린지 {'>'} {category}</span>
                <span className="searchContianer">검색어를 입력하세요</span>
            </span>
            <span className="groupChallengeCategories">
                {categories.map((item) => (<span onClick={()=>{setCategory(item)}}>{item}</span>))}
            </span>
            <ChallengeCategoryFilter categories={categories} category={category} setCategory={setCategory} challengeData={props.challengeData}/>
        </span>
    )
}

export default ChallengeBoard;
