import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineAppRegistration } from "react-icons/md";
import { RiLoginBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CiBarcode } from "react-icons/ci";
import { LuListTodo } from "react-icons/lu";
import { MdDataObject } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// const sidebarData = [
//   { id: 1, icon: FaHome, name: "Home" },
//   { id: 2, icon: FaHome, name: "About" },
//   { id: 3, icon: FaHome, name: "Contact" },
// ];
const sidebarData = [
  { id: 1, icon: FaHome, name: "Home", path: "/" },
  // { id: 2, icon: RiLoginBoxFill, name: "Login", path: "/login" },
  // { id: 3, icon: MdOutlineAppRegistration, name: "signup", path: "/signup" },
  // { id: 3, icon: CiBarcode, name: "otp", path: "/otp" },
  { id: 3, icon: LuListTodo, name: "todo", path: "/todo" },
  { id: 3, icon: MdDataObject, name: "API Data", path: "/apidata" },
];
const Sidebaricon = (props) => {
  const navigate = useNavigate();
  return (
    // <>
    //   {sidebarData.map((data, id) => {
    //     return (
    //       <div className="hover:bg-gray-300" key={id}>
    //         {props.sideBarToggle === true ? (
    //           <div className="flex items-center pt-5 pb-5 pl-12 caret-transparent">
    //             <div>
    //               <data.icon size={"25px"} />
    //             </div>
    //             <div className="ml-3">
    //               <p>{data.name}</p>
    //             </div>
    //           </div>
    //         ) : (
    //           <div className="flex items-center pt-5 pb-5 pl-4 caret-transparent">
    //             <div>
    //               <FaHome size="25px" />
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     );
    //   })}
    // </>

    <>
      {sidebarData.map((data, id) => {
        console.log(data.path);
        return (
          <div className="hover:bg-gray-300" key={id}>
            {props.sideBarToggle === true ? (
              <div className="flex items-center pt-5 pb-5 pl-12 caret-transparent">
                <div>
                  <data.icon
                    size={"25px"}
                    onClick={() => {
                      navigate(`${data.path}`);
                    }}
                  />
                </div>
                <div className="ml-3">
                  {/* <p>{data.name}</p> */}
                  <Link
                    to={`${data.path}`}
                    className="hover:text-blue-800 cursor-pointer"
                  >
                    {data.name}
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex items-center pt-5 pb-5 pl-4 caret-transparent">
                <div>
                  <data.icon
                    size="25px"
                    onClick={() => {
                      navigate(`${data.path}`);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Sidebaricon;
