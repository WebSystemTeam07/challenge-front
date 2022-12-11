import {React, useState} from 'react'
import { json } from 'react-router-dom'
import './../../scss/sign.scss'
import './../../scss/myPage.scss'
import axios from 'axios';
import { useEffect } from 'react';
const port = require('./../../assets/port.json')

export default function EditUserInfo(props) {
    // const [userId, setUserId] = useState(props.data.id)
    const user = JSON.parse(props.data)
    //   const user = props.data
    const [editData, setEditData] = useState({
        "email" : "",
        "name" : "",
        "password" : ""
      })
      const changeEditData = (e) => {
        setEditData({
          ...editData,
          [e.target.name] : e.target.value,
        })
      }
      useEffect(()=>{
        console.log(editData)
      }, [editData])
    const imgAddress = "data:image/jpeg;base64,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"
    

    return (
        <div id='inputContainer_editInfo'>
            <div id="selectedTitle">
                <h3>내 정보 수정</h3>
            <img id="userImg" src={imgAddress} />
            <div className='label'>닉네임</div>
            <div className='horizon'>
                <input className='inputBlock' type='text' name='name' defaultValue={user.name} placeholder={user.name} onChange={changeEditData}/>
                <button className='authButton' onClick={onClickEditName}>변경</button>
            </div>
            <div className='label'>이메일</div>
            <div className='horizon'>
                <input className='inputBlock' type='email' id='inputBlock_email' name='email' defaultValue={user.email} placeholder={user.email} onChange={changeEditData}/>
                <button className='authButton' onClick={()=>{
                    // onClickEditEmail()
                    alert("이메일을 바꿀 수 없습니다.")
                }}>변경</button>
            </div>
            <div className='label'>비밀번호</div>
            <div className='horizon'>
                <input className='inputBlock' type='password' name='password' placeholder='새로운 비밀번호를 입력해주세요.' onChange={changeEditData}/>
                <button className='authButton' onClick={onClickEditPassword}>변경</button>
            </div>
            </div>
        </div>
    )


  /**
    * functions
    */
   async function onClickEditEmail () {
    editEmail()
    .then(res =>{
        alert(res.data.result)
    })
    .catch(e =>{
        console.log(e.response.data.error)
        alert(e.response.data.message)
    })
   }

   async function onClickEditName () {
    editName()
    .then(res =>{
        alert(res.data.result)
    })
    .catch(e =>{
        console.log(e.response.data.error)
        alert(e.response.data.message)
    })
   }

   async function onClickEditPassword () {
    editPassword()
    .then(res =>{
        alert(res.data.result)
    })
    .catch(e =>{
        console.log(e.response.data.error)
        alert(e.response.data.message)
    })
   }

  async function editEmail () {
    return await axios.put(port.url + `/user/editEmail/${user.id}`, {
      email : editData.email
    })
  }

  async function editName () {
    return await axios.put(port.url + `/user/editName/${user.id}`,{
        name : editData.name
    })
  }

  async function editPassword () {
    return await axios.put(port.url + `/user/editpassword/${user.id}`, {
        password : editData.password
    })
  }
}
