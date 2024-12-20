// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootMain from "./components/Form/RootMain";
import LoginRoot from "./components/LoginForm/LoginRoot";
import SiteRoot from "./components/SiteRoot";
import MainRoot from "./components/TableTask/MainRoot";
import Login from "./components/LoginForm/Login";
import Registration from "./components/LoginForm/Registration";
import OtpPage from "./components/LoginForm/OtpPage";
import Protected from "./components/Protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected Component={SiteRoot} />} />
          <Route path="/todo" element={<MainRoot />} />
          <Route path="/apidata" element={<RootMain />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/otp" element={<OtpPage />} />
        </Routes>
      </BrowserRouter>
      {/* <LoginRoot /> */}
    </>
  );
}

export default App;
