import React from "react";
import Navbar from "../Navbar/Navbar";
import HomePage from "../HomePage/Home";
import DemoPage from "../DemoPage/Demo";
import RegisterUser from "../RegisterPage/RegisterUser";
import LoginUser from "../LoginPage/LoginUser";
import UserProfile from "../ProfilePage/UserProfile";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default App;
