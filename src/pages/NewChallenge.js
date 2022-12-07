import AddChallenge from '../components/AddChallenge';
import Header from '../components/Header';
import Navigator from '../components/Navigator';
import Footer from '../components/Footer';
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