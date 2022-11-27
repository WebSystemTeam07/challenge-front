import React, { useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MyPage from './components/myPage/MyPage'
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';

function App() {

    return (
      <>
<BrowserRouter>
				{/* <Header /> */}
				<Routes>
					{/* <Route path="/" element={<Main />}></Route> */}
					<Route path="/signin" element={<SignIn />}></Route>
					<Route path="/signup" element={<SignUp />}></Route>
					<Route path="/mypage" element={<MyPage />}></Route>

					{/* <Route path="*" element={<NotFound />}></Route> */}
				</Routes>
			</BrowserRouter>
      </>
    );
}

export default App;
