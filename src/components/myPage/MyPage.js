import { React, useState, useEffect } from 'react'
import { json, useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import '../styles/myPage.scss'
import '../styles/myPageTable.scss'
import EditUserInfo from './EditUserInfo';
import FinishedChallenge from './FinishedChallenge';
import MyPost from './MyPost';
import OngoingChallenge from './OngoingChallenge';
import { Line } from 'rc-progress';

import dummy from '../../data/dummy.json'
import axios from 'axios';
const port = require('../../assets/port.json')

export default function MyPage() {

  let userId = 0;
  const [view, setView] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const [dBUser, setDbUser] = useState({})


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
  useEffect(() => {
    // console.log(cookies.userData)
    getUserData()
      .then(res => {
        setDbUser(res.data)
        console.log(res.data)
      }
      ).then(() => {
        console.log(dBUser)

      })
      .catch(e => {
        // console.log(e.response.data.error)
        alert(e.response.data.message)
      })
  },[])

  useEffect(() => {

  })

  const user = cookies.userData
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
      case 5:
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
      case 5:
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
              {levelIcon(dBUser.level)}
              {levelName(dBUser.level + 1)}까지 {100 - (dBUser.point - dBUser.level * 100)}점
              <br />
              <div id="barGauge">
                <Line percent={dBUser.point - dBUser.level * 100} strokeWidth={2} trailWidth={2} strokeColor='#438AC3' />
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
              <OngoingChallenge userId={cookies.userData.id} />
            }
            {
              view == 2 &&
              // finishedChallenges.map((data) => {
              //   return <FinishedChallenge data={data} />
              // })
              <FinishedChallenge userId={cookies.userData.id} />
            }
            {
              view == 3 &&
              // myPosts.map((data) => {
              //   return <MyPost data={data} />
              // })
              <MyPost userId={cookies.userData.id} />
            }
          </div>
        </div>
      </div>
    </div>
  )


  /**
      * functions
      */
  async function getUserData() {
    const userId = await cookies.userData.id
    // return await axios.get(port.url + `/user/userId/${userId}`)
    return await axios.get(port.url + `/user/userId/${userId}`)
  }


}