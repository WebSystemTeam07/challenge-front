function Card(props){
  let attend;
  if(props.auth!=undefined){
    attend="출석";
  }
  else{
    attend="결석";
  }
  return(
    <div>
      {props.name}<br/>
      {attend}
    </div>
  )
}
export default Card;