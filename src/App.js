import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import MyChallenge from './pages/MyChallenge';
import GroupChallengePage from './pages/GroupChallengePage';
import NewChallenge from './components/NewChallenge';

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
      <Route path="/groupchallengepage" element={<GroupChallengePage/>}/>
      <Route path="/newchallenge" element={<NewChallenge/>}/>
      <Route path="/groupchallengepage/board" element={<GroupBoard/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;
