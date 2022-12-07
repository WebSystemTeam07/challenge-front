import { React, useState, useEffect } from 'react'
import { json, useNavigate } from 'react-router-dom';
import './../../scss/myPage.scss'
import './../../scss/myPageTable.scss'
import EditUserInfo from './EditUserInfo';
import FinishedChallenge from './FinishedChallenge';
import MyPost from './MyPost';
import OngoingChallenge from './OngoingChallenge';
import { Line } from 'rc-progress';

import dummy from './../../data/dummy.json'

export default function MyPage() {
  const [view, setView] = useState(0);

  // 0 : welcome
  // 1 : green
  // 2 : silver
  // 3 : Gold
  // 4 : diamond
  
  //동그라미
  //https://www.npmjs.com/package/react-circular-progressbar
  //바
  //https://www.npmjs.com/package/rc-progress
  //https://progress-react-component.vercel.app/

  const user = dummy.user
 const challenge = dummy.challenge;

  function levelIcon(userLevel) {
    switch (userLevel) {
      case 0:
        return "🐢 "//🐥🌱🌳🌴🍁❄️ㄹ"
      case 1:
        return "🥉 "// 브론즈"
      case 2:
        return "🥈 "// 실버"
      case 3: 
        return "🥇 " // 골드"
      case 4:
        return "💎 "// 다이아"
      case 5 :
        return "🪐 "
    }
  }
  function levelName(userLevel) {
    switch (userLevel) {
      case 0:
        return "스타터"//🐥🌱🌳🌴🍁❄️ㄹ"
      case 1:
        return "브론즈"// 브론즈"
      case 2:
        return "실버"// 실버"
      case 3:
        return "골드" // 골드"
      case 4:
        return "다이아"// 다이아"
      case 5 :
        return "마스터"
    }
  }
  return (
    <div className='container'>
      <div className="vertical">
        <div id="myInfo">
          <div id="myInfoContents">
            <h1>
             {user.name} 님,
            </h1>
            <div className='horizon'>
             {levelIcon(user.level)}
            {levelName(user.level+1)}까지 {100-(user.point - user.level * 100)}점
              <br/>
            <div id="barGauge">
              <Line percent={user.point - user.level * 100} strokeWidth={2} trailWidth={2} strokeColor='#438AC3' />
            </div>
            </div>
          </div>
        </div>
        <div className="menuHorizon" id="myContents">
          <div className="menuVertical">
            <button className='menu' onClick={() => {
              setView(0)
            }}>내 정보 수정</button>
            <button className='menu' onClick={() => {
              setView(1)
            }}>진행 중인 챌린지</button>
            <button className='menu' onClick={() => {
              setView(2)
            }}>완료한 챌린지</button>
            <button className='menu' onClick={() => {
              setView(3)
            }}>내가 쓴 글</button>
          </div>
          <div id="selectedContents">
            {
              view == 0 &&
              <EditUserInfo data={JSON.stringify(user)} />
            }
            {
              view == 1 &&
              // onGoingChallenges.map((data) => {
              //   return <OngoingChallenge data={data} />
              // })
              <OngoingChallenge data = {challenge} />
            }
            {
              view == 2 &&
              // finishedChallenges.map((data) => {
              //   return <FinishedChallenge data={data} />
              // })
              <FinishedChallenge data = {challenge} />
            }
            {
              view == 3 &&
              // myPosts.map((data) => {
              //   return <MyPost data={data} />
              // })
              <MyPost/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}