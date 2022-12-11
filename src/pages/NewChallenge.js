import AddChallenge from '../components/newChallenge/AddChallenge';
import Bar from '../components/Bar';
const NewChallenge=()=>{
return(
  <>
   <Bar path={"전체보기 > 그룹 챌린지 > "} content={"챌린지 생성"}/>
<AddChallenge/>
</>
)
}
export default NewChallenge;