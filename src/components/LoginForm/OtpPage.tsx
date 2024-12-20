import { useState } from "react"; // import Googleimg from "../img/images.png";
import rightimg from "./img/Capture1.png";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import React from "react";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  return (
    <div className="maindivLogin">
      <div className="leftdiv">
        <div className="divRegistration">
          <p>Sleeknote</p>
          <h3 className="welcomedesign">Enter OTP</h3>
        </div>
        {/* <div className="googledesign">
          <div className="googleicondiv">
            <img src={Googleimg} alt="Not Found" className="googleimgdesign" />
            <p className="googleicontext">Log in with Google</p>
          </div>
        </div> */}
        {/* <div className="centerlinedesign">
          <div className="hrLinerightdesign"></div>
          <div className="linecentertext">
            <p>OR LOGIN WITH EMAIL</p>
          </div>
          <div className="hrLineleftdesign"></div>
        </div> */}
        <form className="formdesign">
          <div className="inputdesign">
            {/* <h3>Enter OTP</h3> */}
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} className="inputBox" />}
            />
          </div>
          {/* <div className="radiomain">
            <div className="radiobuttondesign">
              <input type="checkbox" />
              <label>Keep me logged in</label>
            </div>
            <div>Forgot your password?</div>
          </div> */}
          <button
            className="buttonDesign"
            onClick={() => {
              navigate("/");
            }}
          >
            Verify OTP
          </button>
        </form>
        <div className="signupdesign">
          Already have an account?{" "}
          <a
            href=""
            onClick={() => {
              navigate("/");
            }}
          >
            Sign In
          </a>
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
    </div>
  );
};

export default OtpPage;
