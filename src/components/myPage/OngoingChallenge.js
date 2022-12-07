import React from 'react'
import dummy from './../../data/dummy.json'
import EachChallenge from './EachChallenge';

export default function OngoingChallenge(props) {
  const challenges = dummy.challenge;
  
  return (
    <>
      <div id="selectedTitle">
        <h3>진행 중인 챌린지</h3>
        {
          challenges.map(challenge => 
          {
            return <EachChallenge data={challenge} />
          })
        }
        <br />
      </div>
    </>
  )
}
{/* <div>ongoing</div>
    <div>id : {challenge.id}</div>
    <div>type : {challenge.type}</div>
    <div>title : {challenge.title}</div>
    <div>contents : {challenge.contents}</div>
    <div>term : {challenge.term}</div>
    <div>date : {challenge.date}</div>
    <div>status : {challenge.status}</div> */}