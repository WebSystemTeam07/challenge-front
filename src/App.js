import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import MyChallenge from './pages/MyChallenge';
import GroupChallengeMain from './pages/GroupChallengeMain';
import GroupChallengeDetail from "./pages/GroupChallengeDetail";
import NewChallenge from './components/NewChallenge';
import MyPage from './components/myPage/MyPage'
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';

import Main from './pages/Main';
import Introduce from './pages/Introduce';
import GroupBoard from './pages/GroupBoard'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      {/* <p> 
      <NavLink to='/'>Home&nbsp;</NavLink>
      </p>
        <NavLink to="/MyChallenge" style={{textDecoration:'none'}}>MyChallenge&nbsp;&nbsp;</NavLink>
        <NavLink to="/GroupChallengePage" style={{textDecoration:'none'}}>GroupChallengePage&nbsp;&nbsp;</NavLink>
        <NavLink to="/NewChallenge" style={{textDecoration:'none'}}>New Challenge&nbsp;&nbsp;</NavLink> */}
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/introduce' element={<Introduce />}/>
      <Route path="/mychallenge" element={<MyChallenge/>} />
      <Route path="/groupchallengepage" element={<GroupChallengeMain/>}/>
      <Route path="/newchallenge" element={<NewChallenge/>}/>
      <Route path="/groupchallengepage/board" element={<GroupBoard/>}/>
      <Route path="/login" element={<SignIn />}/>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mypage" element={<MyPage/>} />
    </Routes>
    </div>
  );
}

export default App;
