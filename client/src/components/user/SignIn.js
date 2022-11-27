import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './../../css/sign.css'
import logo from './../../assets/FOFE_임시로고.png'

export default function SignIn() {
    const navigate = useNavigate();
    const [view, setView] = useState(false);

    return (
        <container id='container'>
                <img src={logo} style={{width : "200px"}}/>
                <div id='title'>로그인하고 챌린지 이어하기</div>
                <div className='bigEnter'/>
                <div id = 'inputContainer'>
                    <input className='inputBlock' type='email' id='email' name='email' placeholder='이메일 (예시 : challenge@gmail.com)' />
                    <input className='inputBlock' type='password' id='password' name='password' placeholder='비밀번호' />
                </div>
                    <div className='bigEnter'/>
                    <button className='signButton' onClick = {() => {
                        navigate("/")
                    }}>로그인</button>
                <a onClick={() => navigate("/signup")} >회원가입하기</a>
        </container>
    )
}