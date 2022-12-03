import NewPost from "../components/NewPost";
import React,{useState,useEffect} from 'react';
import {Routes, Route,NavLink,useNavigate} from 'react-router-dom';

const GroupChallengePage=()=>{
return(
  <div>
  <p>그룹페이지</p>
  <div>
    <h3>게시물</h3>
    <div>
    <NavLink to="/post" style={{textDecoration:'none'}}>New post&nbsp;&nbsp;</NavLink>
    </div>
  </div>
  </div>
  
)
}
export default GroupChallengePage;