import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from "../pages/auth/LogIn";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

const PublicRt = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default PublicRt;
