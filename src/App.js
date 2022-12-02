import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import MyChallenge from './pages/MyChallenge';
import GroupChallengeMain from './pages/GroupChallengeMain';
import GroupChallengeDetail from "./pages/GroupChallengeDetail";
import NewChallenge from './components/NewChallenge';
import MyPage from './components/myPage/MyPage'
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';

function App() {

  return (
    <div className="App">
      <p>
        <NavLink to='/'>Home&nbsp;</NavLink>
      </p>
      <NavLink to="/MyChallenge" style={{ textDecoration: 'none' }}>MyChallenge&nbsp;&nbsp;</NavLink>
      <NavLink to="/GroupChallengePage" style={{ textDecoration: 'none' }}>GroupChallengePage&nbsp;&nbsp;</NavLink>
      <NavLink to="/NewChallenge" style={{ textDecoration: 'none' }}>New Challenge&nbsp;&nbsp;</NavLink>
      <Routes>
        <Route path='/' />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/MyChallenge" element={<MyChallenge />} />
        <Route path="/GroupChallengePage" element={<GroupChallengeMain />} />
        <Route path="/groupChallengeMain/groupChallengeDetail" element={<GroupChallengeDetail/>}/>
        <Route path="/NewChallenge" element={<NewChallenge />} />
      </Routes>

    </div>
  );
}

export default App;
