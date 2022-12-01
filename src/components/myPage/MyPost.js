import React from 'react'

export default function MyPost(props) {
    const myPost = props.data;
    // {
    //     "id" : 0,
    //     "challengeId" : 0,
    //     "title" : "title-0",
    //     "contents" : 'this is bad',
    //   },
  return (
    <>
    <div>myPost</div>
    <div>id : {myPost.id}</div>
    <div>title : {myPost.title}</div>
    <div>contents : {myPost.contents}</div>
    <div>challengeId : {myPost.challengeId}</div>
    <br/>
    </>
  )
}
