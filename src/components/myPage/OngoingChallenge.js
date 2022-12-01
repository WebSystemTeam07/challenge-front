import React from 'react'

export default function OngoingChallenge(props) {
    const challenge = props.data;
    // {
    //     "id" : 0,
    //     "type" : 'personal',
    //     "contents" : 'this is one ongoing',
    //     "title" : "title-0",
    //     "term" : 10,
    //     "date" : '2022-09-01',
    //     'status' : true
    //   },
  return (
    <>
    <div>ongoing</div>
    <div>id : {challenge.id}</div>
    <div>type : {challenge.type}</div>
    <div>title : {challenge.title}</div>
    <div>contents : {challenge.contents}</div>
    <div>term : {challenge.term}</div>
    <div>date : {challenge.date}</div>
    <div>status : {challenge.status}</div>
    <br/>
    </>
  )
}