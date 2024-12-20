import React from "react";
import Post from "./Post";
import "./design.css";
import SidebarLogo from "../sidebarLogo";
import Header from "../Header";
import Logout from "../Logout";

const RootMain = () => {
  return (
    <div className="flex">
      <div className=" h-[100vh] pt-8 bg-[#D8DFEF]">
        <SidebarLogo />
      </div>
      <div className="w-full">
        <Header />
        {/* <div>{children}</div> */}
        <Logout />
        <div className="maindiv">
          <div className="demodiv">
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootMain;
