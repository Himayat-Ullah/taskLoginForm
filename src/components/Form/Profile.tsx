import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
// import { userimg } from "./img/images.png";

function Profile() {
  const [name, setName] = useState<any>([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((res) => {
        setName(res.data[count]);
        console.log(res.data[count]);
      });
  }, [count]);
  const incrementCount = () => {
    if (count == 9) {
      setCount(0);
    } else setCount(count + 1);
  };
  const decrementCount = () => {
    if (count == 0) {
      setCount(9);
    } else setCount(count - 1);
  };
  return (
    <div className="maindiv">
      <h2 className="pDesign">User Data From Api</h2>
      <div className="userdiv">
        <img src={"./img/images.png"} alt="not Found" className="userimg" />
        <h3>User : {count}</h3>
        {/* {name.map((user) => ( */}
        <div>
          <p className="titledesign">{name.title}</p>
          <p className="bodydesign">{name.body}</p>
        </div>
        {/* ))} */}
      </div>
      <div className="buttondiv">
        <button onClick={() => decrementCount()} className="buttondesign">
          Previous
        </button>
        <button onClick={() => incrementCount()} className="buttondesign">
          Next
        </button>
      </div>
    </div>
  );
}

export default Profile;
