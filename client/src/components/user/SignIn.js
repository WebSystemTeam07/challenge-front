import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './../../css/sign.css'

export default function SignIn() {
    const navigate = useNavigate();
    const [view, setView] = useState(false);

    return (
        <container id='container'>
            <div id='signContainer'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKChhWEeW9pvQsnQvtPCW65MveZmIOKw-kaA&usqp=CAU'/>
                <div class='title'>로그인해서 챌린지 이어하기</div>
                {!view && <div className='subTitle'>
                    이메일을 입력해주세요
                </div>}
                {view && <div className='subTitle'>
                    비밀번호를 입력해주세요
                </div>}
                {!view && <><div id = 'horizon'>
                    <input className='oneInputBlock' type='email' id='email' name='email' placeholder='이메일 (예시 : challenge@ajou.ac.kr)' />
                    <button className='goButton' onClick = {() => {
                        setView(true)
                    }}>next</button>
                </div>
                <hr style={{ width: "30%" }} />
                <a onClick={() => navigate("/signup")} >ID 생성하기</a></>}
                {
                    view && <div id = 'horizon'>
                    <input className='oneInputBlock' type='password' id='password' name='password' placeholder='비밀번호' />
                    <button className='goButton' onClick = {() => {
                        setView(true)
                    }}>go!</button>
                </div>
                }
            </div>
        </container>
    )
}