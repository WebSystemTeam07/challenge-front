import React,{useState,useMemo} from 'react';
import Tab from './Tab';
import Navigator from './Navigator';
import Header from './Header';
const ChallengeList=()=>{
return(
  <React.Fragment>
    <Header/>
    <Navigator/>
    <h2>나의 챌린지</h2>
<Tab/>
</React.Fragment>
);
}// checkAuth의 첫 번째 매개변수는 해당 일수로 이건 나중에 변수로 넘겨주기
// 그룹/개인 챌린지 별 리스트 띄워줄 컴포넌트
// 
export default ChallengeList;