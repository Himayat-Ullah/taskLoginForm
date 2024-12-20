import axios from "axios";
import rightimg from "./img/Capture1.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const showToastMessage = () => {
    toast.success("You are Loged In Successfully", {
      position: "top-center",
    });
  };
  const showToastErrorMessage = () => {
    toast.error("Enter Valid UserName and Password", {
      position: "top-center",
    });
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formData = {
      username,
      password,
    };

    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", formData)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.access_token));
        console.log("Login successfully", res);
      })
      .catch((err) => {
        console.log("Login failed", err);
      });
    // navigate("/profile");
  };
  //   const fetchData = (email, pass) => {
  //     //reqres registered sample user
  //     const loginPayload = {
  //       email: "eve.holt@reqres.in",
  //       password: "cityslicka",
  //     };

  //     axios
  //       .post("https://reqres.in/api/login", loginPayload)
  //       .then((response) => {
  //         //get token from response
  //         const token = response.data.token;

  //         //set JWT token to local
  //         localStorage.setItem("token", token);

  //         //set token to axios common header
  //         // setAuthToken(token);

  //         //redirect user to home page
  //         window.location.href = "/";
  //       })
  //       .catch((err) => console.log(err));
  //   };
  function fetchData(e: { preventDefault: () => void }) {
    e.preventDefault();
    const formData = {
      username,
      password,
    };
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(username);

        // console.log(data);

        if (data.username === formData.username) {
          localStorage.setItem("jwt-token", data.token);
          localStorage.setItem("login", true);
          setUserName("");
          setPassword("");
          navigate("/");
          showToastMessage();
        } else {
          //   alert(data.message);
          showToastErrorMessage();
          console.log(data.message);
        }
      });
  }
  return (
    <div className="maindivLogin mt-16" id="loginRoot">
      <div className="leftdiv">
        <div className="headdiv">
          <p>Sleeknote</p>
          <h3 className="welcomedesign">Welcome</h3>
        </div>
        <form className="formdesign" onSubmit={fetchData}>
          <label className="labeldesign">User Name</label>
          <input
            type="text"
            className="inputdesign"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <label className="labeldesign">Password</label>
          <input
            type="password"
            autoComplete="off"
            className="inputdesign"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="radiomain">
            <div className="radiobuttondesign">
              <input type="checkbox" />
              <label>Keep me logged in</label>
            </div>
            <div>Forgot your password?</div>
          </div>
          <button className="buttonDesign" type="submit">
            Log In
          </button>
        </form>
        <div className="signupdesign" onClick={() => navigate("/registration")}>
          Don't have an account?
          <a href="">Sign up</a>
        </div>
      </div>
      {/* <div >
          <form>
            <input type="email" />
            <input type="password" />
            <div>
              <div>
                <input type="radio" />
                <label>Keep me logged in</label>
              </div>
              <div>Forgot your password?</div>
            </div>
            <button>Log In</button>
          </form>
          <div>Don't have an account? Sign up</div>
        </div> */}
      <div className="rightdiv">
        <div className="updiv">
          <h4>Sleeknote Academy</h4>
          <p className="textdesign">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            cum.
          </p>
          <button className="buttondesign">START ACADEMY</button>
        </div>
        <div className="downdiv">
          <img src={rightimg} alt="notFound" className="lastimg" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
