import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyChallenge from './pages/MyChallenge';
import GroupChallengeMain from './pages/GroupChallengeMain';
import NewChallenge from './components/NewChallenge';
import GroupBoardDetail from './pages/GroupBoardDetail'
import MyPage from './components/MyPage/MyPage'
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';

import ChattingBoard from './components/GroupBoardComponent/ChattingBoard';

import Main from './pages/Main';
import Introduce from './pages/Introduce';
import GroupBoard from './pages/GroupBoard'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/introduce' element={<Introduce />}/>
            <Route path="/mychallenge" element={<MyChallenge/>} />
            <Route path="/groupchallengepage" element={<GroupChallengeMain/>}/>
            <Route path="/newchallenge" element={<NewChallenge/>}/>
            <Route path="/groupchallengepage/board/:id" element={<GroupBoard/>}/>
            <Route path="/login" element={<SignIn />}/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mypage" element={<MyPage/>} />
            <Route path="/groupchallengepage/board/:id/detail" element={<GroupBoardDetail />} />
            <Route path="/chat" element={<ChattingBoard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;