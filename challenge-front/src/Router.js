import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Main from "./pages/Main";
import GroupChallengeMain from "./pages/GroupChallengeMain";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/groupChallengeMain" element={<GroupChallengeMain/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;