import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './../../css/myPage.css'
import './../../css/sign.css'
import FinishedChallenge from './FinishedChallenge';
import MyPost from './MyPost';
import OngoingChallenge from './OngoingChallenge';

export default function MyPage() {
  const [view, setView] = useState(0);
  
  const onGoingChallenges = [
    {
      "id" : 0,
      "type" : 'personal',
      "contents" : 'this is one ongoing',
      "title" : "title-0",
      "term" : 10,
      "date" : '2022-09-01',
      'status' : true
    },
    {
      "id" : 1,
      "type" : 'group',
      "title" : "title-0",
      "contents" : 'this is group ongoing.',
      "term" : 5,
      "date" : '2022-11-1',
      'status' : true
    },
    {
      "id" : 2,
      "type" : 'group',
      "title" : "title-0",
      "contents" : 'this is group finished.',
      "term" : 18,
      "date" : '2022-11-12',
      'status' : true
    },
  ]

  const finishedChallenges = [
    {
      "id" : 0,
      "type" : 'personal',
      "contents" : 'this is one ongoing',
      "title" : "title-0",
      "term" : 10,
      "date" : '2022-09-01',
      'status' : false
    },
    {
      "id" : 1,
      "type" : 'group',
      "title" : "title-0",
      "contents" : 'this is group ongoing.',
      "term" : 5,
      "date" : '2022-11-1',
      'status' : false
    },
    {
      "id" : 2,
      "type" : 'group',
      "title" : "title-0",
      "contents" : 'this is group finished.',
      "term" : 18,
      "date" : '2022-11-12',
      'status' : false
    },
  ]

  const myPosts = [
    {
      "id" : 0,
      "challengeId" : 0,
      "title" : "title-0",
      "contents" : 'this is bad',
    },
    {
      "id" : 1,
      "challengeId" : 1,
      "title" : "title-1",
      "contents" : 'this is good',
    },
    
  ]

  return (
    <div className='container'>
      <div className="vertical">
        <div id="myInfo" className='horizon'>
          <div id="myInfoContents">

          </div>
          <div>
                <img id = "gage" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVgAAACSCAMAAAA3tiIUAAABMlBMVEX/////pAD/QU6AvAAzMzN6uQD/nwD/oQD/nQD/NUT/pxn/9u3C3ZX/qa18ugD/MED/OkgeHh4uLi4WFhb/N0YkJCT/LT0pKSn/pwD//fj/8fL/8d3/7/D5/PP/y87/4eP/UFz/f4c+Pj7Dw8NFRUX/3K7/1Jn/cnv/iZD/SVb/oab/+Pj/Xmn/d3/a67+EwgCrq6vq6uqBgYHS0tL/zoz/lwD/u1n/xnL/6s7/5sP/tkns9Nz/4Lb/1tj/mJ7/16G01n2hzFn/tLguKDWx1XctJzX/wMSTk5O/3JBfX19zc3PM46fHx8fn8tT/xX7/szmOwyiXx0LW6Lf/uFB3rAtqlhhWdCFHWCo6QjBfgx0nFjb/Z3BPZyWfy1RxohBbfR4/SS2FsTeSxTpjY2MAAACgoKBCnYTqAAAMGUlEQVR4nO2da0PayhaGAyQhAQ3ITSK0aFW84AW2HkDF+6VaW9Da7nZva/c5uv3/f+HMJCCQ20xIMhM075cqWh2fLt9Za82alGECBQoUKFCgQIECBQrkouR4odA63G7Xd2P5UJTnGSb+n2g+H+vU29vlw51CPC7TXuK4SW7ulBt3nXxU4PkoUAgqBsAK8A34Cs/zQjTfuWsAwLRXOx6SC4vtGMDGd3H29QJ2QArh0G65FQSvleTmdj0v8FqiFmC7eEH4xhqLQegaKr5YB5FqAtUabJduNNZoBYE7JBCqMdNIxQSrwhXuDoPA7anZiAkIqJhg1cDdDdgCFdp5VKjaAquw5TuLb9sT4oe7OLFqE6zCNtpo0v7pqKnQCGEGq22wCtu3GbZyq4MfrKOABeL59ltzW/kQa79yCBaGbf0tOYK8HeJtEhoRLES7+1bQyuVRsI4KFqAV7nZo/8wkVI6NhHV0sDBq71591C7mR8TqBCyM2vqr3saanVHJOAQL+2DtV5t8yQ07aavLYEHylV+kTcAbHeo6rGTBhkJC5zX6QdsZFDfAAqtt0cbgvuIOuboBNhR7ZT5bvC+BhGDkfMA1sAJIaL8cvR64J0nxHvyxS9tj+QZYxQ13s0cbiDuaWcqFw7kTgMVZyDoHC43gkotI3ARtJm5ofyUTBhKLoOhyxMUxWB7sXHtSBIg7fkcbi2NN5sKKkkvgnQ7NPDZaByu4VcBGpMgX2mCcqbKeCHeVuGCYghMzcByxcYaZ4CKqxtwOSrNiuK8Zhtl2QNYhWAHUXe96XBU7oE1ndF0kkgNcM+uMIzNw2CuARvAgRQbIjm120LPXnnLvGaY5esg6A8sDI7geCFjFaDdoIxpJy4mwRisVJ2bgCKxwCIxAimjEfaUNaQQt6biGxWXweowG2Ogd+M7HOrCR8dvCKveijiswg31gBjbhKAOFvCAIUTgfKwiGk4go8QWG+crpuAKyR7RJ2VMxnDTgCswAfKyNaQaQaCi2W2+UWzs7zUIBmCRTKDR3Wq1yo77bydvgK5SBERhghWTPaLOyo5IJ17B4wDAyhhlEeSFf314sFMwbJvHCYtti6HPoq3UYQyMYu7SrlDThCsoEYAY71mYAAjXfaMXxvlVhsRGLouBGgRFsGBnBmJEtmWIFle0s+ISGuRlEQaTaHRaMtxoxwcJf+G1oBCYBC8k+jEcj0dQH1JBdBSTyZlSjjR3MUB2WXCibj9aAdII5Mg3YsYnZorkPqDZbYpiWkRnwobqjwYpmO2boCTAj+GLFdTzIzsxacw0n18Bn1bUEokLncKRYHZS8U9eHLTQC5sbcCMaEbGUNwRWYwaTuAMy9adZCO6px2253GyHfZ11rGRRXQLYIzGDgx+fz246DtS95eIZJaCKNQCV76d4SPNC6Ub2lMwPY834xAz5adnlTlg/7c0zqMRfCCFSyfq5ul3G4gpCFB2Aq2Gho24tc5wUtnhGoZP3b69L2CU0FD8AWBVgLNFw0gUHJ5RD8l+N3esdcOPJrf/a9vp9lZQZ3vLDr4chPvCFEo9AIbnHBSjf+PGK0Krh0ZnABfvKYx/M+zU5IHjjmwiB76+2CRhQqgR3WDPh19XpFcmH4mAspXzYR5/A2rl7IzhFaFrYRqGT9d6QwiW2wCtelIpllyZZNAgOyftvA9u1wTeYmya1sw6KvpZd0469OV8VOuGZmSyTX9u7Bls36q7adw6hke8qtVwivDrNC6JL1U51wYsMIEgRtoKevkh078E82W8Tnmsy8p7HCPYN2webmZuTbNz1XyT8txCXsDDYZJmqvfb275TRUv33/88fP8782DczALzkXvhFk1kjba1/Hg2Q3//r7/PQ0xbIGEQvI+sMMitjxKt7T48owZ0Nkf52yLJv6YRCwwAweKC6zL2wjENfpLnSQ7OY3CPb0uyFYf5jBBW6vkFgVa6p+Fbb5m4U6NcQK5xDpm0Fldmy49slufk+xqZ/s6S/jgPVFN+YAs/ci+oBrj+zmP+fs6X+533//NuHqg55BCTMjyNxTXmhXis/+OmfPf8C4NS8bqO9fmDtXkmKeNawHSfpxyp7/qUSuKVfqlS3maUxyZYbqMgf1v5+Aq1FdoAnZG6qrRI9nKEpQqrcMtHWaSqVMsqzhkKV5HI6ZasETLp+oOpWa/vkNg2uEajNmBY/rKr0VavQxzWavDGfmfRWyF1gOm/RJQgD0aYqd+gMx0+mHkMWrDVb8khDUFrLs1DN8C++Ekdo4F17AwuF4X2jrw3Rqal55U3/jy1ASpZVipQS+Mdj5bCo1vdV9x/xGwlDI0nHZynISXc4qY8Z+UDXNTi/UXt49wyFL7ch2ZjWTQESt6JMM9o8pkA4MvC9jHYpTbB+erFmipXFyaKSnrJIODAhnGJlO+bW8rAbj+6WcKVqfGEFtYZpNVzUvYpkBhY7BTFIUl9QNvzQnmpitP0rZLVDEZue1r5pcAdWELPkm16QIR4XWLpQktXgQNkq94AVP+poHVeyHLf3r11ghS7wvqxYHycTspIK2crJi4Ah+KA0+gm1rIB0Y0CN6/5KITxztv7RfxMSB+gt/ca/Zx+BVA+qCVewn4w+h9i+Jk26/kk645gYYZhJzqtnuzyUGZ7hmCa/JQJWrLJv+aPZRswvhXaw3l+TPZ2Y0u39iTZ0cKh70i4YclWGiIdVgFatNB/oyv/YBgvWs+2Qusg/o0rUJkrmVE+WUoDI5qzqCD5pan6cHqlgjnRmT5biHa7WztTdxQ3YsZt0gdU2ED5Qx7crFGtzHEtQDFja1PxhuWz3tGbisxEV6FvD1AUQud01irV2ZjBcCs1X3sf11UaReG8B04AqRl2hDFlA97tYEX84A1QjhqzQnZt2XZG5JDdTSMu2A7Ta1rTXsshJ327WAdxOPXO9DEsEtzKJhCDJbP2RZsKmdfkZ/Xj8xAMF61EW48SBxfeIEvaBofYaYSK4SuhNjKuMq1kDdXHbQAo4i3HAckxtEvkD1YcUM3WIWNrVTVulAX/CURuIeexZw/cjpMgWJWF5glBNoyFI9N3gebmpbaoMDFqDmqvLGMafHSrArW0GfeudoTr7ApvYTdpviuFu17l1GjKjCiCXVL0BfllNud9PSE9i2kOmARsACJIvOgSfr1OsAeamLYnEAqljWooo1kpkF9L2AUFmLPp2lN0qwxaZSU59t/ZXrG0uqEWIJVwU5sJVZJrIQA1XTqCpWL3TDm9A5Anp0k9qMhlLF2uSK80QDMo/eWEVOE6yQWIaBLJraVkIPHJE5oLlHWWySjhPUrvCqWJ3QXkDEZNE36OmMwyKa2hYyah5qTJZEJltCOkGORk4Am9qYVaxOyFNFIoMbyBlDKkcHMB3ArWJ1OkKbLIEzRWR5QKNPACe18atYrdCzhyRKBOQFJArJ1hNOU9tceyiuJHYvjCuepJux/UntUYV8qqR05NJazYV8mgZxi91ip1NpnKa2uUxOawfAPrq0WHMhW1uk69n5tPFolh1h3KNxZ7EWMj1H7Ekkm8U+m45m2RDGsKznRe0qKikgO7oJm9ojVLFaIfMtyfO0YA6VFIgEy4PKk9Volg0hSwTvJ5CRSQHBDkxtAWxbI1WxWiF3L+8v0KCasUlyD37Zgmex9praZkI+S87zbgGyy50hVndVs/ab2mZCpgWeDxeUUGBFUnMwz+kRmtpmQja4PD9E2EeBJXWOiDWahS3kA9KlR4/bMMhzmRyRbMt6Utu+0FdovD6dQTYNiTRja+zLfWN3JKMvengMFll4kbgpA5varMMqViPkuZfXg93IbuysZ2C3qtWqslnBSW3HVaxGD0iwHp8nLiPAenbJc34hnc1m//1UY2rpVPbJ7S9veYFGAetxTbuM+t+6PGoaVtMp5WmE02yNqf7rXjrQE7r08hgsqlXgUeG1lWa7Sn0AlN3/BshjL6+bBUiw3jzC8CrVA2t34g1TyJrWa7ComWNvwNZeAhaE7BX68+0L+T/SeD19fJ8QLZXzBOznqQGwH7z4DhMcSh4fJ55MIuTJ+cG852C/XE5Y65Ls1U9CGrKCBdqreU1a6G9eWRdbBIGq/ZBNu1xzvXH90XVZu3PwgVD6mIZPeptiA65uq/b8dPXJzVZhoECBAgUKFChQoHHW/wELcltuAFMqLAAAAABJRU5ErkJggg=="/>
          </div>
        </div>
        <div className="horizon" id="myContents">
          <div className="menuVertical">
            <button className='menu' id="firstMenu" onClick={() => {
              setView(1)
            }}>진행 중인 챌린지</button>
            <button className='menu' onClick={() => {
              setView(2)
            }}>완료한 챌린지</button>
            <button className='menu' onClick={() => {
              setView(3)
            }}>내가 쓴 게시판</button>
          </div>
          <div id="selectedContents">
            {
              view == 1 &&
              onGoingChallenges.map((data) => {
                return <OngoingChallenge data={data} />
              })
            }
            {
              view == 2 &&
              finishedChallenges.map((data) => {
                return <FinishedChallenge data={data} />
              })
            }
            {
              view == 3 &&
              myPosts.map((data) => {
                return <MyPost data={data} />
              })
            }
          </div>
        </div>
      </div>
    </div>

    // {/* 
    //     // <container id='container'>
    //     //         <div id='signContainer'>
    //     //             <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKChhWEeW9pvQsnQvtPCW65MveZmIOKw-kaA&usqp=CAU'/>
    //     //             <div class='title'>로그인해서 챌린지 시작하기</div>

    //     //         </div>
    //     //     </container> */}


  )
}