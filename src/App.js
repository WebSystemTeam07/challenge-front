import './App.css';
import {Routes, Route,NavLink} from 'react-router-dom';
import MyChallenge from './pages/MyChallenge';
import GroupChallengePage from './pages/GroupChallengePage';
import NewChallenge from './components/NewChallenge';

function App() {
 
  return (
    <div className="App">
      <p> 
      <NavLink to='/'>Home&nbsp;</NavLink>
      </p>
        <NavLink to="/MyChallenge" style={{textDecoration:'none'}}>MyChallenge&nbsp;&nbsp;</NavLink>
        <NavLink to="/GroupChallengePage" style={{textDecoration:'none'}}>GroupChallengePage&nbsp;&nbsp;</NavLink>
        <NavLink to="/NewChallenge" style={{textDecoration:'none'}}>New Challenge&nbsp;&nbsp;</NavLink>
     <Routes>
      <Route path='/'/>
      <Route path="/MyChallenge" element={<MyChallenge/>} />
      <Route path="/GroupChallengePage" element={<GroupChallengePage/>}/>
      <Route path="/NewChallenge" element={<NewChallenge/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
