import React from 'react'
import dummy from './../../data/dummy.json'
import EachChallenge from './EachChallenge';

export default function FinishedChallenge(props) {
    const finishedChallenges = dummy.challenge;
  
  return (
    <>
      <div id="selectedTitle">
        <h3>완료한 챌린지</h3>
        {
          finishedChallenges.map(challenge => 
          {
            return <EachChallenge data={challenge} />
          })
        }
        <br />
      </div>
    </>
  )
  
  

}