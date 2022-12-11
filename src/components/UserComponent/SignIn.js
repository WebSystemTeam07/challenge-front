import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import axios from 'axios';
import '../styles/sign.scss'
import logo from './../../assets/FOFE_임시로고.png'
const port = require('./../../assets/port.json')

export default function SignIn() {
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(["userData"]);
    const [signIn, setSignIn] = useState({
        email: "",
        password: ""
    });
    useEffect(()=>{
        console.log(signIn)

    },[signIn])
    const changeSignIn = (e) => {
        setSignIn({
          ...signIn,
          [e.target.name] : e.target.value,
        })
      }

    return (
        <container id='container'>
                <img src={logo} style={{width : "200px"}}/>
                <div id='title'>로그인하고 챌린지 이어하기</div>
                <div className='bigEnter'/>
                <div id = 'inputContainer_sign'>
                    <input className='inputBlock' type='email' id='email' name='email' placeholder='이메일 (예시 : challenge@gmail.com)' onChange= {changeSignIn} onClick={changeSignIn} />
                    <input className='inputBlock' type='password' id='password' name='password' placeholder='비밀번호' onChange = {changeSignIn} onClick={changeSignIn} />
                </div>
                    <div className='bigEnter'/>
                    <button className='signButton' onClick = {onClickLogin}>로그인</button>
                <a id ='signupLink' onClick={() => navigate("/signup")} >회원가입하기</a>
        </container>
    )


    /**
     * functions
     */
    async function sendLogin() {
        return await axios.post(port.url + '/user/login', signIn)
    }

    async function onClickLogin() {
        sendLogin()
        .then(res =>{
            setCookie("userData", res.data.result, { path: "/" });
            alert('로그인이 완료되었습니다.')
            navigate('/')
        })
        .catch(e=>{
            console.log(e.response.data.error)
            alert(e.response.data.message)
        })
    }
}