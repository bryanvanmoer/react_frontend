import React from "react";
import Navbar from "../Navbar/Navbar";
import HomePage from "../HomePage/Home";
import DemoPage from "../DemoPage/Demo";
import LoginPlayer from "../LoginPage/LoginPlayer";
import RegisterPage from "../RegisterPage/RegisterPlayer";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/loginPlayer" element={<LoginPlayer />} />
        <Route path="/registerPlayer" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default App;
