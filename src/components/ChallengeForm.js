import React,{useState} from "react";
import './styles/button.module.scss';
import styles from './styles/challengeform.module.scss';
import more from './styles/newchallenge.module.scss';

const ChallengeForm=(props)=>{
  const [enteredTitle,setEnteredTitle]=useState('');
  const [enteredStartDate,setEnteredStartDate]=useState('');
  const [enteredEndDate,setEnteredEndDate]=useState('');
  const [clickedCategory,setClickedCategory]=useState('운동');
  const [method,setMethod]=useState('text');
  const [content,setContent]=useState('');
  const [tag,setTag]=useState('');
  const titleChangeHandler=(event)=>{
    setEnteredTitle(event.target.value);
  }
  const startDateChangeHandler=(event)=>{
    setEnteredStartDate(event.target.value);
  }
  const endDateChangeHandler=(event)=>{
    setEnteredEndDate(event.target.value);
  }
  const categoryChangeHandler=(event)=>{
    setClickedCategory(event.target.value)
    }
  const methodChangeHandler=(event)=>{
    setMethod(event.target.value);
  }
  const onCancel=()=>{
    setEnteredTitle('');
    setEnteredStartDate('');
    setEnteredEndDate('');
    setClickedCategory('');
    setTag('');
    setContent('');
    setMethod('');
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    let startDate=new Date(enteredStartDate);
    let endDate=new Date(enteredEndDate);
    if(startDate>endDate){
      alert("잘못된 입력입니다");
      onCancel();
    }
  const term=(Math.floor((endDate-startDate)/(1000*60*60*24))+1);
    
    const challengeData={
      title:enteredTitle,
      startDate:startDate,
      endDate:endDate,
      term:term,
      type:'group',
      category:clickedCategory,
      method:method,
      contents:content,
      tag:tag,
      userId:"134623"
    };
    
    props.onSaveChallengeData(challengeData);
    setEnteredTitle('');
    setEnteredStartDate('');
    setEnteredEndDate('');
    setClickedCategory('');
    setTag('');
    setContent('');
    setMethod('');
  };
  const contentChangeHandler=(event)=>{
    setContent(event.target.value);
  }
  const tagChangeHandler=(event)=>{
    setTag(event.target.value);
  }
  return(
    <form onSubmit={submitHandler}>
      <div className={styles.align_center}>
      <div className={styles.newChallenge}>
          <label>Title</label>
          <div className={styles.newText}>
          <input type='text' 
          onChange={titleChangeHandler}
          value={enteredTitle}
          />
          </div>
          <label>Category</label>
          <select onChange={categoryChangeHandler} value={clickedCategory}>
            <option value="운동">운동</option>
            <option value="생활">생활</option>
            <option value="취미">취미</option>
            <option value="공부">공부</option>
            </select>
          <label>Tag</label>
          <div className={styles.newText}>
          <input type="text" onChange={tagChangeHandler} placeholder={"태그를 ,로 구분해주세요"} value={tag}/>
          </div>
          <label>StartDate</label>
          <div className={styles.date}>
          <input type='date' 
          onChange={startDateChangeHandler} min='2022-11-15' max='2023-12-31'
          value={enteredStartDate}/>
          </div>
          <label>EndDate</label>
          <div className={styles.date}>
          <input type='date' onChange={endDateChangeHandler} min='2022-11-15' max='2024-12-31'
          value={enteredEndDate}/>
          </div>
          <label>챌린지 소개</label>
          <div className={styles.newText}>
          <input type='text' onChange={contentChangeHandler} value={content}/>
          </div>
          <label>Authentication Method</label>
          <select onChange={methodChangeHandler} value={method}>
            <option value="text">글</option>  
            <option value="photo">사진</option>        
            </select>
            </div>
            <div className={styles.wrap}>
            
               <button type='submit' className={more.learn_more}>추가</button>
      <div className={styles.form}>

        <button type='button' onClick={onCancel} className="btn btn-success btn-layer-1_3">취소<i class="fa fa_times"></i></button>
        </div>
        </div>
      </div>
    </form>
  );
};// 입력된 기간으로 알아서 며칠 챌린지인지 계산하기, 입력된 거 json파일로 바꿔서 저장하기

export default ChallengeForm;
