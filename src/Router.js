import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Main from "./pages/Main"
import Login from "./pages/Login"
import Introduce from "./pages/Introduce"
import GroupChallengeMain from "./pages/GroupChallengeMain"
import GroupChallengeDetail from "./pages/GroupChallengeDetail"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/introduce" element={<Introduce />} />
                <Route exact path="/groupChallengeMain" element={<GroupChallengeMain/>}/>
                <Route exact path="/groupChallengeMain/groupChallengeDetail" element={<GroupChallengeDetail/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;