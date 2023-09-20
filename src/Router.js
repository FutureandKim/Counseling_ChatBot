import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Main from "./pages/Main";

function DefaultRouter () {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/main" element={<Main />} />
        </Routes>
    </Router>
    );
  };

export default DefaultRouter;