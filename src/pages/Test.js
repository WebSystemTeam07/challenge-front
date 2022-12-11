import React from 'react'
import axios from 'axios';
import port from "./../assets/port.json";
import { useEffect } from 'react';


export default function Test() {
    useEffect(() => {
        (usersbyPoint()
            .then((res) => {
                console.log(res.data)
            }))
            .catch((e) => {
                console.log(e.message) //서버에서 제공 에러메시지
                console.log(e.response.data.message) //커스텀 에러메시지 (ex. 챌린지 등록에 실패했습니다)
            })
    }, [])

    /**
     * 함수 순서는 pdf순서대로
     * 
     */


    // http://localhost:5500/user/point
    async function usersbyPoint() {
        return await axios.get(port.url + '/user/point')
    }
    // http://localhost:5500/challenge/group/uptodate
    async function uptodateChallenge() {
        return await axios.get(port.url + '/challenge/group/uptodate')
    }

    // http://localhost:5500/user/challenge/:challengeId
    async function usersbyChallenge () {
        const challengeId = 13443
        return await axios.get(port.url + `/user/challenge/${challengeId}`)
    }
    
    // http://localhost:5500/post/:challengeId
    async function readPosts () {
        const challengeId = 18427
        return await axios.get(port.url + `/post/${challengeId}`)
    }

    // http://localhost:5500/post/:challengeId
    async function writePosts () {
        const challengeId = 18427
        return await axios.post(port.url + `/post/${challengeId}`, {
            "userId" : "15002",
            "title" : "title",
            "contents" :"contents",
            "date" : "Sat Dec 24 2022 09:00:00 GMT+0900 (한국 표준시)"
        })
    }

    // http://localhost:5500/post/:challengeId
    async function getTasks () {
        const challengeId = 18427
        return await axios.get(port.url + `/task/${challengeId}`)
    }
    

    // http://localhost:5500/challenge/new
    async function newchallenge() {
        let exData = {
            "userId": "14667",
            "title": "title",
            "contents": "contents",
            "category": "category",
            "method": "photo", //혹은 text
            "tag": "tag1, tag2, tag3",
            "startDate": "Fri Dec 09 2022 09:00:00 GMT+0900 (한국 표준시)",
            "endDate": "Sat Dec 24 2022 09:00:00 GMT+0900 (한국 표준시)",
            term: 15,
            //imageUrl :"보내도되고 안보내도 되고",
            type: "personal"
        }
        return await axios.post(port.url + '/challenge/new', exData)
    }

    // http://localhost:5500/challenge/user/:userId
    async function myChallenge() {
        let userId = 15764
        return await axios.get(port.url + `/challenge/user/${userId}`)

        // myChallenge.then(res=>{
        //     const groupChllenge = res.data.group;
        //     const personalChllenge = res.data.personal;
        // })
    }

    // http://localhost:5500//userTask/status/:day
    async function updateUserTask() {
        let day = 1
        return await axios.put(port.url + `/userTask/status/${day}`, {
            "userId": 15764,
            "challengeId": 13443,
        })
    }

    // http://localhost:5500/challenge/group
    async function getGroupChallenge() {
        return await axios.get(port.url + `/challenge/group`)
    }

    // http://localhost:5500/challenge/personal
    async function getPersonalChallenge() {
        return await axios.get(port.url + `/challenge/personal`)
    }

    // http://localhost:5500/challenge/join
    async function joinChallenge() {
        return await axios.post(port.url + `/challenge/join`, {
            "userId": 14667,
            "challengeId": 13443,
        })
    }

    // http://localhost:5500/post/:challengeId
    async function writePosts2 () {
        const challengeId = 18427
        return await axios.post(port.url + `/post/${challengeId}`, {
            "userId" : "15002",
            "title" : "title",
            "contents" :"contents",
            "date" : "Sat Dec 24 2022 09:00:00 GMT+0900 (한국 표준시)"
        })
    }

    // http://localhost:5500/post/task/:challengeId
    async function postTask () {
        const challengeId = 18427
        return await axios.post(port.url + `/task/${challengeId}`, {
            "userId" : "15002",
            "day" :5,
            "title" : "titleoftask",
            "contents" :"contentsoftask",
            "date" : "Sat Dec 24 2022 09:00:00 GMT+0900 (한국 표준시)"
        })
    }



    // http://localhost:5500/userTask 
    // [ERROR] 배열 못읽어옴 postman에서는 제대로 작동
    // async function getUserTask() {
    //     return await axios.get(port.url + '/userTask', {
    //         "userId" : 15764,
    //         "challengeId" : 18427
    //     })
    // }

    return (
        <div>test</div>
    )
}
