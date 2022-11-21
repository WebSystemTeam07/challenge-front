import React,{useState} from "react";
import styled from "styled-components";
//import './ChallengeForm.css';
const ChallengeForm=(props)=>{
  const [enteredTitle,setEnteredTitle]=useState('');
  const [enteredStartDate,setEnteredStartDate]=useState('');
  const [enteredEndDate,setEnteredEndDate]=useState('');
  const [clickedCategory,setClickedCategory]=useState('');
  const [method,setMethod]=useState('');
  const [content,setContent]=useState('');
  const titleChangeHandler=(event)=>{
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  }
  const startDateChangeHandler=(event)=>{
    setEnteredStartDate(event.target.value);
    console.log(event.target.value);
  }
  const endDateChangeHandler=(event)=>{
    setEnteredEndDate(event.target.value);
    console.log(event.target.value);
  }
  const categoryChangeHandler=(event)=>{
    setClickedCategory(event.target.value)
    console.log(event.target.value)
    }
  const methodChangeHandler=(event)=>{
    setMethod(event.target.value);
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    const start=new Date(enteredStartDate);
    const end=new Date(enteredEndDate);
    console.log(end-start);
    if(start>end){
      alert("잘못된 입력입니다");
      props.onCancel();
    }
    const term=(Math.floor((end-start)/(1000*60*60*24))+1);
    const challengeData={
      title:enteredTitle,
      startDate:enteredStartDate,
      endDate:enteredEndDate,
      term:term,
      type:'group',
      category:clickedCategory,
      method:method,
      content:content


    };
    props.onSaveChallengeData(challengeData);
    setEnteredTitle('');
    setEnteredStartDate('');
    setEnteredEndDate('');
  };
  const contenChangeHandler=(event)=>{
    setContent(event.target.value);
    console.log(event.target.value);
  }
  return(
    <form onSubmit={submitHandler}>
          <label>Title</label>
          <input type='text' 
          onChange={titleChangeHandler}
          value={enteredTitle}
          />
          <label>Category</label>
          <select onChange={categoryChangeHandler}>
            <option value="운동">운동</option>
            <option value="생활">생활</option>
            <option value="취미">취미</option>
            <option value="공부">공부</option>
            </select>
          <label>Tag</label>

          
          <label>StartDate</label>
          <input type='date' 
          onChange={startDateChangeHandler} min='2022-11-15' max='2023-12-31'
          value={enteredStartDate}/>
          <label>EndDate</label>
          <input type='date' onChange={endDateChangeHandler} min='2022-11-15' max='2024-12-31'
          value={enteredEndDate}/>
          <label>Challenge Content</label>
          <input type='text' className="test" onChange={contenChangeHandler}/>
          <label>Authenticate Method</label>
          <select onChange={methodChangeHandler}>
            <option value="글">글</option>  
            <option value="사진">사진</option>        
            </select>
        <button onClick={props.onCancel}>Cancel</button>
      <button type='submit'>Add Challenge</button>
    </form>
  );
};// 입력된 기간으로 알아서 며칠 챌린지인지 계산하기, 입력된 거 json파일로 바꿔서 저장하기

export default ChallengeForm;

const StyledInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
`;
const StyledLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;

  &:before {
    content: "";
    height: 1.5rem;
    width: 1.5rem;
    background-color: white;
    border: 2px solid gainsboro;
    border-radius: 0.35rem;
  }
`;
const StyledP = styled.p`
  margin-left: 0.5rem;
`;