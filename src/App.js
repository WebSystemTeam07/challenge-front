import './App.css';
import {Routes, Route,NavLink} from 'react-router-dom';
import MyChallenge from './pages/MyChallenge';
import GroupChallengePage from './pages/GroupChallengePage';
import NewChallenge from './pages/NewChallenge';
import NewPost from './components/NewPost';
import Navigator from './components/Navigator'

function App() {
 
  return (
    <div className="App">
     
     <Routes>
      <Route path='/'/>
      <Route path="/MyChallenge" element={<MyChallenge/>} />
      <Route path="/GroupChallengePage" element={<GroupChallengePage/>}/>
      <Route path="/NewChallenge" element={<NewChallenge/>}/>
      <Route path="/post" element={<NewPost/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
