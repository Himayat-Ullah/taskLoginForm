import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [apiData, setApiData] = useState();
  const [profilePic, setProfilePic] = useState();
  const navigate = useNavigate();
  const getProfileData = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", header)
      .then((res) => {
        setApiData(res.data.name);
        setProfilePic(`${res.data.avatar}`);
        console.log(profilePic);

        console.log("Profile data", res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  const handlelogout = () => {
    setApiData();
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <button onClick={getProfileData}>Show Data</button>
      {apiData && (
        <div>
          <button onClick={handlelogout}>Log out</button>
          <p>Welcome : {apiData}</p>
        </div>
      )}
      <div className="profileMainDiv">
        <img src={profilePic} alt="profile image" className="profileimg" />
        <h2>{apiData}</h2>
      </div>
    </div>
  );
};

export default Profile;
