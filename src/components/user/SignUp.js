import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './../../scss/sign.scss'
import logo from './../../assets/FOFE_임시로고.png'

export default function SignIn() {
    const navigate = useNavigate();
    const [next, setNext] = useState(false);

    // TO DO : auth인증되지 않았다면 다음버튼 disable

    return (
        <container id='container'>
            <img src={logo} style={{ width: "200px" }} />
            <div id='title'>챌린지를 시작해 보세요</div>
            <div className='bigEnter' />
            {!next && <div id='inputContainer'>
                <div id='horizon'>
                    <input className='inputBlock' type='email' id='inputBlock_email' name='email' placeholder='이메일 (예시 : challenge@gmail.com)' />
                    <button className='authButton' onClick={() => {
                    }}>인증</button>
                </div>
                <input className='inputBlock' type='Number' id='authNum' name='authNum' placeholder='인증번호' />
            </div>}
            {next &&
                <div id='inputContainer'>
                    <input className='inputBlock' type='email' id='email' name='email' placeholder='닉네임' />
                    <input className='inputBlock' type='password' id='password' name='password' placeholder='비밀번호' />
                </div>
            }
            <div className='bigEnter' />
            
            {!next &&<button className='signButton' onClick={() => {
                setNext(true)
            }}>다음</button>}
            {next &&
                <button className='signButton' onClick={() => {
                    navigate("/")
                }}>회원가입</button>
            }
        </container>
    )
}