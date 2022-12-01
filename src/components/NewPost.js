import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
const NewPost=()=>{

return(
  <div>
            <div>
                <span>종류: </span>
                <select>
                    <option>선택</option>
                    <option>인증</option>
                    <option>자유</option>
                </select>
            </div>
            <div>
                <span>제목: </span><input></input>
            </div>
            <div>
            <span>내용: </span><textarea></textarea>
            </div>
        </div>
)
}
export default NewPost;