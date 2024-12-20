import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";

const Protected = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("jwt-token");
    if (!login) {
      navigate("/login");
    }
  }, []);
  const { Component } = props;
  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
