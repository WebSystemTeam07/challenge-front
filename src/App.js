import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom';
import MyChallenge from './pages/MyChallenge';
import GroupChallengeMain from './pages/GroupChallengeMain';
import GroupChallengeDetail from "./pages/GroupChallengeDetail";
import NewChallenge from './pages/NewChallenge';
import GroupBoardDetail from './pages/GroupBoardDetail'
import MyPage from './components/myPage/MyPage'
import SignIn from './components/UserComponent/SignIn';
import SignUp from './components/UserComponent/SignUp';

import ChattingBoard from './components/GroupBoardComponent/ChattingBoard';

import Main from './pages/Main';
import Introduce from './pages/Introduce';
import GroupBoard from './pages/GroupBoard'
import GroupBoardArticle from './pages/GroupBoardArticle';
import IndividualChallengeMain from './pages/IndividualChallengeMain';
import CertificationRegister from './pages/CertificationRegister';
import InformationRegister from './pages/InformationRegister';

import Test from './pages/Test';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/introduce' element={<Introduce />}/>
        <Route path="/mychallenge" element={<MyChallenge/>} />
        <Route path="/groupchallengepage" element={<GroupChallengeMain/>}/>
        <Route path="/groupchallengepage/groupChallengeDetail" element={<GroupChallengeDetail/>}/>
        <Route path="/individualchallengepage" element={<IndividualChallengeMain/>}/>
        <Route path="/newchallenge" element={<NewChallenge/>}/>
        <Route path="/groupchallengepage/board/*" element={<GroupBoard/>}/>
        <Route path="/groupchallengepage/board/detail/*" element={<GroupBoardDetail />} />
        <Route path="/groupchallengepage/board/detail/article/*" element={<GroupBoardArticle />} />
        <Route path="/login" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage/>} />
        <Route path="/chat" element={<ChattingBoard />} />
        <Route path="/groupchallengepage/board/detail/certifiregister" element={<CertificationRegister />} />
        <Route path="/groupchallengepage/board/detail/inforegister" element={<InformationRegister />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
