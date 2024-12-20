import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./loginFormDesign.css";
import Login from "./Login";
import Registration from "./Registration";
import OtpPage from "./OtpPage";
import Profile from "./Profile";

const LoginRoot = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/otppage" element={<OtpPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Registration /> */}
      {/* <OtpPage /> */}
    </>
  );
};

export default LoginRoot;
