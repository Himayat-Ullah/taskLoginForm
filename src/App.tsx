import "./App.css";
import Googleimg from "../src/img/images.png";
import rightimg from "../src/img/Capture1.png";

function App() {
  return (
    <>
      <div className="maindiv">
        <div className="leftdiv">
          <div className="headdiv">
            <p>Sleeknote</p>
            <h3 className="welcomedesign">Welcome</h3>
          </div>
          <div className="googledesign">
            <div className="googleicondiv">
              <img
                src={Googleimg}
                alt="Not Found"
                className="googleimgdesign"
              />
              <p className="googleicontext">Log in with Google</p>
            </div>
          </div>
          <div className="centerlinedesign">
            <div className="hrLinerightdesign"></div>
            <div className="linecentertext">
              <p>OR LOGIN WITH EMAIL</p>
            </div>
            <div className="hrLineleftdesign"></div>
          </div>
          <form className="formdesign">
            <label className="labeldesign">Email Address</label>
            <input type="email" className="inputdesign" />
            <label className="labeldesign">Password</label>
            <input type="password" className="inputdesign" />
            <div className="radiomain">
              <div className="radiobuttondesign">
                <input type="radio" />
                <label>Keep me logged in</label>
              </div>
              <div>Forgot your password?</div>
            </div>
            <button className="buttonDesign">Log In</button>
          </form>
          <div className="signupdesign">
            Don't have an account? <a href="">Sign up</a>
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, cum.
            </p>
            <button className="buttondesign">START ACADEMY</button>
          </div>
          <div className="downdiv">
            <img src={rightimg} alt="notFound" className="lastimg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
