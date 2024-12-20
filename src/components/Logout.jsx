import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./TableTask/Buttton";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("jwt-token");
    console.log("Click");

    navigate("/login");
  };
  const buttonName = "Logout";
  const className =
    "bg-gray-500 p-1 absolute mt-[-3.7%] ml-[23%] caret-transparent";
  return (
    <div className="z-10 ml-[80%] w-20 flex justify-center items-start text-white">
      <Button
        label={buttonName}
        className={className}
        onClick={handleLogout}
        // className="bg-gray-500 p-1 absolute mt-[-3.7%] ml-[23%]"
      />
      {/* <button
        onClick={handleLogout}
        className="bg-gray-500 p-1 absolute mt-[-3.7%] ml-[23%]"
      >
        Logout
      </button> */}
    </div>
  );
};

export default Logout;
