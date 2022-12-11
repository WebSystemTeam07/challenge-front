import '../styles/sign.scss'
import '../styles/myPage.scss'
import {React, useState, useEffect} from 'react'
import { json } from 'react-router-dom'
import axios from 'axios';
import { useCookies } from "react-cookie";
const port = require('./../../assets/port.json')

export default function EditUserInfo(props) {
  // const [userId, setUserId] = useState(props.data.id)
  const [cookies, setCookie, removeCookie] = useCookies(["userData"]);
  const user = JSON.parse(props.data)
  //   const user = props.data
  const [editData, setEditData] = useState({
    "email" : "",
        "name" : "",
        "password" : ""
      })
    const [imgAddress, setImgAddress] = useState("")
      const changeEditData = (e) => {
        setEditData({
          ...editData,
          [e.target.name] : e.target.value,
        })
      }
      useEffect(()=>{
          setImgAddress(props.userData.imgUrl)
      },[props])    

    return (
        <div id='inputContainer_editInfo'>
            <div id="selectedTitle">
                <h3>내 정보 수정</h3>
            <img id="userImg" src={imgAddress} />
            <div className='label'>닉네임</div>
            <div className='horizon'>
                <input className='inputBlock_edit' type='text' name='name' defaultValue={user.name} placeholder={user.name} onChange={changeEditData}/>
                <button className='authButton' onClick={onClickEditName}>변경</button>
            </div>
            <div className='label'>이메일</div>
            <div className='horizon'>
                <input className='inputBlock_edit' type='email' name='email' defaultValue={user.email} placeholder={user.email} onChange={changeEditData}/>
                <button className='authButton' onClick={()=>{
                    // onClickEditEmail()
                    alert("이메일을 바꿀 수 없습니다.")
                }}>변경</button>
            </div>
            <div className='label'>비밀번호</div>
            <div className='horizon'>
                <input className='inputBlock_edit' type='password' name='password' placeholder='새로운 비밀번호를 입력해주세요.' onChange={changeEditData}/>
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
      setCookie("userData",{
        ...cookies.userData,
        email : editData.email
      }, 1)
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
      setCookie("userData",{
        ...cookies.userData,
        name : editData.name
      }, 1)
      console.log(cookies,"cookies")
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

  async function getUser () {
    return await axios.get(port.url + '/userId/:id', {parmas :{
      id : cookies.userData.id
    }})
  }
}
