import { React, useEffect, useState } from 'react';
import dummy from '../../data/dummy.json'
import EachChallenge from './EachChallenge';

import axios from 'axios';
const port = require('../../assets/port.json')

export default function FinishedChallenge(props) {
  const finishedChallenges = dummy.challenge;
  const [userId, setUserId] = useState(props.userId)
  const [challenges, setChallneges] = useState([])
  useEffect(() => {
    setUserId(props.userId)
    getMyCompleteChallenge()
      .then(res => {
        setChallneges(res.data)
      })
  }, [])

  return (
    <>
      <div id="selectedTitle">
        <h3>완료한 챌린지</h3>
        {
          challenges.length > 0 && challenges.map(challenge => {
            return <EachChallenge data={challenge} />
          })
        }
        <br />
      </div>
    </>
  )
  async function getMyCompleteChallenge() {
    return await axios.get(port.url + `/challenge/myComplete/${userId}`)
  }
}