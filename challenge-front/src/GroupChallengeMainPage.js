import React, { useState } from 'react';
import './GroupChallengeMainPage.css'

// tmp data
const mainCategoryData = [
    {id: 1, name: "그룹 챌린지"},
    {id: 2, name: "30일 챌린지"},
    {id: 3, name: "어쩌구"},
    {id: 4, name: "저쩌구"}
]
const subCategoryData = [
    {id: 1, name: "카테고리1"},
    {id: 2, name: "카테고리2"},
    {id: 3, name: "카테고리3"},
    {id: 4, name: "카테고리4"}
]

function MainCategory(){
    return(
        <React.Fragment>
            <div id="logo">로고</div>
            <div id="mainCategoryList">
                <div class="mainCategoryItem">그룹 챌린지</div>
                <div class="mainCategoryItem">30일 챌린지</div>
                <div class="mainCategoryItem">어쩌구</div>
                <div class="mainCategoryItem">저쩌구</div>
            </div>
            
        </React.Fragment>
    )
}

function GroupChallengeCategoryItem(props){
    console.log(props.text);
}

function GroupChallengeCategory(){
    return(
        <React.Fragment>
            <div class="groupChallengeCategoryItem">카테고리1</div>
            <div class="groupChallengeCategoryItem">카테고리2</div>
            <div class="groupChallengeCategoryItem">카테고리3</div>
            <div class="groupChallengeCategoryItem">카테고리4</div>
        </React.Fragment>
    )
}

function GroupChallengeList(props){
    
    return(
        <React.Fragment>
            <div id="selectedGroupChallengeCategory">카테고리1</div>
            <div id="GroupChallengItems">
                <GroupChallengeItem id="1"/>
                <GroupChallengeItem id="2"/>
                <GroupChallengeItem id="3"/>
            </div>
        </React.Fragment>
    )
}

function GroupChallengeItem(props){
    return(
        <React.Fragment>
            <div>챌린지{props.id} 제목</div>
            <div>챌린지{props.id} 기간</div>
            <div>챌린지{props.id} 정보..........</div>
        </React.Fragment>
    )
}

function GroupChallengeMainPage(){
    const [select, setSelect] = useState(1);

    return(
        <React.Fragment> 
            <div id="mainCategory">
                <MainCategory/> 
            </div>
            <div id="groupChallengeCategory">
                <GroupChallengeCategory/>
            </div>
            <div id="groupChallengeList">
                <GroupChallengeList selected={select}/>
            </div>

        </React.Fragment>
    )
}

export default GroupChallengeMainPage;