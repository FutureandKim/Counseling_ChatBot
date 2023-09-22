import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Main from "./pages/Main";
import Login from "./pages/Auth/Login";
import MyPage from "./pages/MyPage";

function DefaultRouter () {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/main" element={<Main />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/mypage" element={<MyPage/>}/>
        </Routes>
    </Router>
    );
  };

export default DefaultRouter;