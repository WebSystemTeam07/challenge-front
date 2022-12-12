import "./individualChallengeMain.scss";
import React, {useState} from "react";

import IndividualChallengeCategoryFilter from "./IndividualChallengeCategoryFilter";

const categories = ["전체", "운동", "생활", "취미", "공부"];

function IndividualChallgeBoard(props){
    const [category, setCategory] = useState("전체");

    return(
        <span className="groupChallengeBoardContainer">
            <span className="groupChallengeBoardHeader">
                <span className="individualCategoryPath"> 개인 챌린지 {'>'} {category}</span>
            </span>
            <span className="groupChallengeCategories">
                {categories.map((item) => (<span className={category == item ? "categorySelected": "categoryName"} onClick={()=>{setCategory(item)}}>{item}</span>))}
            </span>
            <IndividualChallengeCategoryFilter categories={categories} category={category} setCategory={setCategory} challengeData={props.challengeData}/>
        </span>
    )
}

export default IndividualChallgeBoard;