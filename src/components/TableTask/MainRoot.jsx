import React from "react";
import Form from "./Form";
import "./style.css";
import Header from "../Header";
import SidebarLogo from "../sidebarLogo";
import Logout from "../Logout";

const MainRoot = () => {
  return (
    <>
      <div className="flex">
        <div className=" h-[100vh] pt-8 bg-[#D8DFEF]">
          <SidebarLogo />
        </div>
        <div className="w-full">
          <Header />
          {/* <div>{children}</div> */}

          {/* <contextValue.Provider value={setToggle}> */}
          <Logout />
          <div className="maindiv">
            <div class="bg-white border border-gray-200 rounded-lg shadow">
              {/* <Button /> */}
              <Form />
              {/* <Table /> */}
            </div>
          </div>
          {/* </contextValue.Provider> */}
        </div>
      </div>
    </>
  );
};

export default MainRoot;
