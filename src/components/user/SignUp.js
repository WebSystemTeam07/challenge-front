import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
import './../../scss/sign.scss'
import logo from './../../assets/FOFE_임시로고.png'
const port = require('./../../assets/port.json')

export default function SignIn() {
    const navigate = useNavigate();
    const [next, setNext] = useState(false);
    const [authEmail, setAuthEmail] = useState({
        authNum: 0,
        status: false,
    })
    const [signUp, setSignUp] = useState({
        email: "",
        name: "",
        password: ""
    });
    let authValueinEmail = 0


    useEffect(() => {
        
    }, [authEmail])


    const changeSignUp = (e) => {
        setSignUp({
          ...signUp,
          [e.target.name] : e.target.value,
        })
      }

    return (
        <div id='container'>
            <img src={logo} style={{ width: "200px" }} />
            <div id='title'>챌린지를 시작해 보세요</div>
            <div className='bigEnter' />
            {!next && <div id='inputContainer'>
                <div id='horizon'>
                    <input className='inputBlock' type='email' id='inputBlock_email' name='email' placeholder='이메일 (예시 : challenge@gmail.com)' onChange={changeSignUp} />
                    <button className='authButton' onClick={onClickAuthButton}>인증</button>
                </div>
                <input className='inputBlock' type='Number' id='authNum' name='authNum' placeholder='인증번호' onChange={changeSignUp} />
            </div>}
            {next &&
                <div id='inputContainer'>
                    <input className='inputBlock' type='text' id='name' name='name' placeholder='닉네임' onChange={changeSignUp} />
                    <input className='inputBlock' type='password' id='password' name='password' placeholder='비밀번호' onChange={changeSignUp} />
                </div>
            }
            <div className='bigEnter' />

            {!next && authEmail.status &&
                <button className='signButton' onClick={onClickNextButton}>다음</button>
            }
            {!next && !authEmail.status &&
                <button className='signButton' style={{ background: "#c2c0c0"}} disabled>이메일 인증을 완료해주세요</button>
            }
            {next &&
                <button className='signButton' onClick={onClickSignUpButton}>회원가입</button>
            }
            <div className='bigEnter' />
        </div>
    )


    /**
     * functions
     */
    async function sendSignUp() {
        return await axios.post(port.url + '/user/signup', signUp)
    }

    async function sendEmail() {
        return await axios.get(port.url + `/user/email/${signUp.email}`)
    }

    async function onClickAuthButton() {
        console.log(signUp.email)
        sendEmail()
        .then(res =>{
            authValueinEmail = res.data.authValue
        }).then(()=>{
            setAuthEmail({
                ...authEmail,
                status :true
            })
        })
        .catch(e=>{
            console.log(e.response.data.error)
            alert(e.response.data.message)
        })
    }

    async function onClickNextButton() {
        if(authValueinEmail != authEmail.authNum){
            alert('이메일 인증번호가 일치하지 않습니다.')
            $("#authNum").focus();
        }
        else{
            alert('이메일 인증을 완료하였습니다. 남은 가입절차를 이어갑니다.');
            setNext('true')
        }
    }

    async function onClickSignUpButton() {
        sendSignUp()
        .then(res => {
            alert(res.data.result)
            navigate('/login')
        }).catch(e => {
            alert(e.response.data.message)
        })
    }

}