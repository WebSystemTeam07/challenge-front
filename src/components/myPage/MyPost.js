import React, { useEffect } from 'react'
import dummy from './../../data/dummy.json'
import $ from 'jquery'

//게시물 저장 : new Date().getTime()
//date 가져옴 : date.toISOString().split('T')[0]
export default function MyPost() {
  const myPosts = dummy.posts;
  let tableBody;

  useEffect(()=>{
    console.log(myPosts)
    getTable();
  },[])

  async function getTable() {
    try {
      $(".tableBody").empty();
      myPosts.map((it, index) => {
        it.date = new Date();
        let postDate = it.date.toISOString().split('T')[0]
        tableBody =
          `<tr>
          <td scope="row">${index + 1}</td> 
          <td>${it.title}</td>
          <td>${postDate}</td>
        </tr>`;
        $('.tableBody').append(tableBody);
      })

    }
    catch (e) {
      //error handling
      alert("[TODO] table error handling");
    }
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
}
