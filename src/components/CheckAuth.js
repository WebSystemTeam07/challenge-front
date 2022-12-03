import {useState} from 'react';
const CheckAuth=(props)=>{
  const [attend,setAttend]=useState([]);//인증확인
  const startDate="2022-11-05";
  const checkAuth=(startDate)=>{
    const now=new Date();
    let year = now.getFullYear();  
    let month = now.getMonth()+1;      
    let date = now.getDate(); 
    let startDate_arr=startDate.split("-");
    let stDate=new Date(startDate_arr[0],startDate_arr[1],startDate_arr[2]);
    let today=new Date(year,month,date);
    let day=(today.getTime()-stDate.getTime())/(1000*60*60*24);
    const tmp_attend={"day":day,"attend":true}
    setAttend([...attend,tmp_attend]);
  }
  return(
    <>
  <button type='button'  onClick={(e)=>{
    checkAuth(startDate);
    e.currentTarget.disabled=true;
  }}>인증</button> 
  {console.log(attend)}
  {props.getAuth(attend)}
  </>
  )
}
export default CheckAuth;