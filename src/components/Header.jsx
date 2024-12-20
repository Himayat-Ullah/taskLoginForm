import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center h-20 bg-gray-800 caret-transparent pl-[80%]">
      <IoMdNotificationsOutline
        color="white"
        size={"40px"}
        className="ml-4 mr-4"
      />
      <div className="border-[1px] h-20 text-white"></div>
      {/* <CiMail color="white" size={"40px"} className="ml-4 mr-4" /> */}
      {/* <div className="border-2 h-20 text-white"></div> */}
      {/* <div className="ml-40">
        <CiSearch color="white" className="absolute ml-64 mt-1" size={"24px"} />
        <input
          type="text"
          className="h-8 w-72 rounded-2xl pl-4 bg-gray-500 text-white border-none outline-none caret-current"
          placeholder="Search..."
        />
      </div> */}
      {/* <div className="flex text-gray-500 font-bold   ml-20 space-x-16">
        <Link to="/" className="hover:text-yellow-300">
          Home
        </Link>
        <Link to="/login" className="hover:text-yellow-300">
          Login
        </Link>
        <Link to="/signup" className="hover:text-yellow-300">
          Sign Up
        </Link>
        <Link to="/otp" className="hover:text-yellow-300">
          OTp
        </Link>
        <Link to="/todo" className="hover:text-yellow-300">
          Todo
        </Link>
        <Link to="/apidata" className="hover:text-yellow-300">
          Show API Data
        </Link>
      </div> */}
      <div className="flex items-center ml-4">
        {/* <GiWorld
          color="white"
          className="items-end align-bottom absolute ml-4"
          size={"26px"}
          style={{ zIndex: 5 }}
        /> */}
        <div className="flex">
          <img
            src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
            alt="sidebar img not Found"
            className=" w-8 h-8 z-10 mt-[-1%] ml-2 rounded-full items-end align-bottom absolute"
          />
        </div>
        <select
          name="languages"
          id="language"
          className="bg-gray-500 border-none outline-none h-8 relative "
        >
          <option>
            <FaChevronDown />
          </option>
          <option value="urdu">Urdu</option>
          <option value="english">English</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
