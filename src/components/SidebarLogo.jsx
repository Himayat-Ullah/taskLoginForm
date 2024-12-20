import React, { useState } from "react";
import { GiHamburgerMenu, GiShamrock } from "react-icons/gi";
import Sidebaricon from "./Sidebaricon";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "./store/toggleSlice";

const SidebarLogo = () => {
  // const [sideBarToggle, setSideBarToggle] = useState(true);
  const dispatch = useDispatch();
  const isOn = useSelector((state) => state.toggle.isOn);
  return (
    <div className={isOn ? "w-52" : "w-20"}>
      {isOn ? (
        <ImCross
          className="absolute ml-56 cursor-pointer text-white"
          size={"20px"}
          onClick={() => dispatch(toggle())}
          // onClick={() => {
          //   setSideBarToggle(!sideBarToggle);
          // }}
        />
      ) : (
        <GiHamburgerMenu
          className="absolute ml-24 cursor-pointer text-white"
          size={"20px"}
          onClick={() => dispatch(toggle())}
          // onClick={() => {
          //   setSideBarToggle(!sideBarToggle);
          // }}
        />
      )}
      {isOn ? (
        <div className="caret-transparent  pl-12 mb-10">
          <div className="flex">
            <GiShamrock size={"30px"} className="" />
            <p className="ml-3 font-bold text-lg justify-center">Breeze</p>
          </div>
          {/* <div className="flex mt-3 caret-transparent">
            <img
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
              alt="sidebar img not Found"
              className=" w-8 h-8  rounded-full"
            />
            <p className="ml-3 justify-center">Breeze</p>
          </div> */}
        </div>
      ) : (
        <div className="pl-4 mb-10">
          <div className="flex">
            <GiShamrock size={"30px"} className="" />
          </div>
          {/* <div className="flex mt-3 mb-10">
            <img
              src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
              alt="sidebar img not Found"
              className=" w-8 h-8  rounded-full"
            />
          </div> */}
        </div>
      )}
      <Sidebaricon sideBarToggle={isOn} />
    </div>
  );
};

export default SidebarLogo;
