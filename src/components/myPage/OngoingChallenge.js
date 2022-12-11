import { React, useEffect, useState } from 'react';
import dummy from '../../data/dummy.json'
import EachChallenge from './EachChallenge';

import axios from 'axios';
const port = require('../../assets/port.json')

export default function OngoingChallenge(props) {
  const [userId, setUserId] = useState(props.userId)
  const [challenges, setChallneges] = useState([])
  useEffect(() => {
    setUserId(props.userId)
    getMyOngoingChallenge()
      .then(res => {
        setChallneges(res.data)
      })
  }, [])

  return (
    <>
      <div id="selectedTitle">
        <h3>진행 중인 챌린지</h3>
        {
          challenges.length > 0 && challenges.map(challenge => {
            return <EachChallenge data={challenge} />
          })
        }
        <br />
      </div>
    </>
  )


  async function getMyOngoingChallenge() {
    return await axios.get(port.url + `/challenge/myOngoing/${userId}`)
  }
}


{/* <div>ongoing</div>
    <div>id : {challenge.id}</div>
    <div>type : {challenge.type}</div>
    <div>title : {challenge.title}</div>
    <div>contents : {challenge.contents}</div>
    <div>term : {challenge.term}</div>
    <div>date : {challenge.date}</div>
    <div>status : {challenge.status}</div> */}