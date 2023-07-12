import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./pages/Login/Login";
import {Signup} from "./pages/Signup/Signup";
import {Netflix} from "./pages/Netflix";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/" element={<Netflix/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

