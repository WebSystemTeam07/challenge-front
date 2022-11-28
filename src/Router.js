import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Main from "./pages/Main"
import Login from "./pages/Login"
import Introduce from "./pages/Introduce"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/introduce" element={<Introduce />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;