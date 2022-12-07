import ChallengeList from "../components/ChallengeList";
import Navigator from '../components/Navigator';
import Header from '../components/Header';
import Footer from '../components/Footer';
const myChallenge=()=>{
  return(
    <div>
      <Header />
            <Navigator />
<ChallengeList/>
<Footer />
</div>
  );
}

export default myChallenge;