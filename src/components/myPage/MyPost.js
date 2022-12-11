import $ from 'jquery'
import { React, useEffect, useState } from 'react';
import axios from 'axios';
const port = require('../../assets/port.json')

//게시물 저장 : new Date().getTime()
//date 가져옴 : date.toISOString().split('T')[0]
export default function MyPost(props) {
  const [userId, setUserId] = useState(props.userId)
  const [myPosts, setMyPosts] = useState([])
  useEffect(() => {
    setUserId(props.userId)
    getMyPosts()
      .then(res => {
        setMyPosts(res.data)
      })
      .catch(e =>{
        console.log(e.response.data.error)
        // alert(e.response.data.message)
      })
  }, [])

  useEffect(()=>{
    if(myPosts){
      console.log(myPosts)
      getTable()
    }
  },[myPosts])


  let tableBody;

  async function getTable() {
    // try {
      $(".tableBody").empty();
      myPosts.map((it, index) => {
        console.log(it.date, "Date")
        let tmpDate = new Date(it.date)
        let postDate = tmpDate.toISOString().split('T')[0]

        console.log(postDate)
        tableBody =
          `<tr>
          <td scope="row">${index + 1}</td> 
          <td>${it.title}</td>
          <td>${postDate}</td>
        </tr>`;
        $('.tableBody').append(tableBody);
      })

    // }
    // catch (e) {
    //   //error handling
    //   alert("작성하신 게시물을 불러올 수 없습니다.");
    // }
  }
  return (
    <>
    <div id="selectedTitle">
      <h3>내가 쓴 글</h3>
     <table class="table">
      <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">작성일</th>
          </tr>
        </thead>
        <tbody className='tableBody'></tbody>
      <br />
     </table>
    </div>
    </>
  )
  
  /**
      * functions
      */
  async function getMyPosts() {
    return await axios.get(port.url + `/post/user/${userId}`)
  }
}
