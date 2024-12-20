import React from "react";
import SidebarLogo from "./sidebarLogo";
import Header from "./Header";
import MainRoot from "./TableTask/MainRoot";
import Layout from "./Layout";
import RootMain from "./Form/RootMain";
import Login from "./LoginForm/Login";
import Logout from "./Logout";

const SiteRoot = () => {
  return (
    <Layout>
      {/* <Logout /> */}
      <MainRoot />
      {/* <RootMain /> */}
      {/* <Login /> */}
    </Layout>
  );
};

export default SiteRoot;
