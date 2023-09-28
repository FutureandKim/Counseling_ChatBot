import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Main from "./pages/Main/Main";
import Login from "./pages/Auth/Login";
import Join from "./pages/Auth/Join";
import MyPage from "./pages/MyPage";


function DefaultRouter () {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/main" element={<Main />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/mypage" element={<MyPage/>}/>
            <Route path="/join" element={<Join/>}/>
        </Routes>
    </Router>
    );
  };

export default DefaultRouter;