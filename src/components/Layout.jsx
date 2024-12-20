import React from "react";
import SidebarLogo from "./sidebarLogo";
import Header from "./Header";
import Logout from "./Logout";

const Layout = ({ children }) => (
  <div className="flex">
    <div className=" h-[100vh] pt-8 bg-[#D8DFEF]">{/* <SidebarLogo /> */}</div>
    <div className="w-full">
      {/* <Header /> */}
      <div>{children}</div>
    </div>
  </div>
);

export default Layout;
