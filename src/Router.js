import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Main from "./pages/Main"
import Login from "./pages/Login"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;