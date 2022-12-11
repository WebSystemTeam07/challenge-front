import "./individualChallengeMain.scss";
import React, {useState} from "react";

import IndividualChallengeCategoryFilter from "./IndividualChallengeCategoryFilter";

const categories = ["전체", "운동", "식습관", "취미", "환경", "뷰티", "마음건강"];

function IndividualChallgeBoard(props){
    const [category, setCategory] = useState("전체");

    return(
        <span className="groupChallengeBoardContainer">
            <span className="groupChallengeBoardHeader">
                <span className="individualCategoryPath"> 개인 챌린지 {'>'} {category}</span>
                <input type="text" className="searchContianer"  placeholder="검색어를 입력하세요"/>
            </span>
            <span className="groupChallengeCategories">
                {categories.map((item) => (<span className={category == item ? "categorySelected": "categoryName"} onClick={()=>{setCategory(item)}}>{item}</span>))}
            </span>
            <IndividualChallengeCategoryFilter categories={categories} category={category} setCategory={setCategory} challengeData={props.challengeData}/>
        </span>
    )
}

export default IndividualChallgeBoard;