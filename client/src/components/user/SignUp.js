import { React } from 'react'
import { useNavigate } from 'react-router-dom';
import './../../css/sign.css'
// https://www.icloud.com/
export default function SignIn() {
    const navigate = useNavigate();

    return (
        // <container id='container'>
        //     <div id='signContainer'>
        //         <div class='title'>로그인</div>
        //         <div class='subTitle'>이메일과 비밀번호를 입력하여 로그인해주세요</div>
        //         {/* <form> */}
        //             {/* <div> */}
        //             <input className='inputBlock' type='email' id='email' name='email' placeholder='이메일을 입력하세요 (예시 : challenge@ajou.ac.kr)' />
        //             {/* </div> */}
        //             {/* <div> */}
        //             <input className='inputBlock' type='password' id='password' name='password' placeholder='비밀번호 입력하세요' />
        //             {/* </div> */}
        //             {/* <a>회원이 아니신가요? 30일 챌린지를 진행해보세요</a> */}
        //         {/* </form> */}
        //             <button class='signButton' >login</button>
        //     </div>
        // </container>

        <container id='container'>
            <div id='signContainer'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKChhWEeW9pvQsnQvtPCW65MveZmIOKw-kaA&usqp=CAU'/>
                <div class='title'>챌린지를 시작해보세요</div>
                    <input className='inputBlock' type='email' id='email' name='email' placeholder='이메일 (예시 : challenge@ajou.ac.kr)' />
                    <input className='inputBlock' type='password' id='pasword' name='password' placeholder='비밀번호' />
                    <hr style={{ width: "20%" }} />
                    <button className='signButton'>회원가입</button>
            </div>
        </container>
    )
}