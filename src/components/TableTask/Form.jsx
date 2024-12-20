import React, { useEffect, useState } from "react";
import Button from "./Buttton";
import { motion } from "framer-motion";
import Table from "./Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [toggle, setToggle] = useState(true);
  const [data, setData] = useState([
    { title: "title", body: "body" },
    { title: "title1", body: "body1" },
    { title: "title2", body: "body2" },
    { title: "title3", body: "body3" },
    { title: "title4", body: "body4" },
    { title: "title5", body: "body5" },
    { title: "title6", body: "body6" },
    { title: "title7", body: "body7" },
  ]);
  const [inputValue, setInputValue] = useState({});
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  useEffect(() => {
    // console.log("Data Deleted!");
    // toast("Welcome", {
    //   position: "top-center",
    // });
  }, [setData]);
  const handleInput = (e) => {
    setInputValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(inputValue);
  };
  const showToastMessage = () => {
    toast.success("Data added Successfully", {
      position: "top-center",
    });
  };
  const showDeleteMessage = () => {
    toast.success("Data deleted Successfully", {
      position: "top-center",
    });
  };
  const toggleButton = () => {
    setToggle(!toggle);
  };
  const handleDelete = () => {
    console.log(id);
    setData([...data.slice(0, id), ...data.slice(id + 1)]);
    setModal(false);
    showDeleteMessage();
  };
  const handleCancel = () => {
    setModal(false);
  };
  // function removeContent(index) {
  //   setModal(true);
  //   console.log("modal", modal);

  //   if (isModalBtn == "delete") {
  //     console.log("delete");
  //     setData([...data.slice(0, index), ...data.slice(index + 1)]);
  //     // setModal(false);
  //   } else if (isModalBtn == "cancel") {
  //     // setModal(false);
  //   }

  //   // showDeleteMessage();
  //   // console.log(data, index);
  //   // return data;
  // }
  const editPost = (index, e) => {
    // console.log("edit");
    setToggle(false);
    const editData = data.splice(index, 1);
    // console.log(data[index - 1]);
    // setInputValue(editData[0].title, editData[0].body);
    console.log(editData);

    // console.log(editData[0].title, editData[0].body);
    setInputValue(() => ({
      ["title"]: editData[0].title,
      ["body"]: editData[0].body,
    }));
    // setInputValue({ ...editData.title, ...editData.body });
  };
  const handleSubmit = () => {
    setToggle(!toggle);
    data.push(inputValue);
    setInputValue("");
  };
  return (
    <>
      {modal === true ? (
        <div className="modalBlur">
          <motion.div
            className="modalDesign"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { times: [0, 0.3, 1] } }}
          >
            <p>Sure to delete</p>
            <div className="modalButtonDiv">
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={handleDelete}>Yes</button>
            </div>
          </motion.div>
        </div>
      ) : null}
      {toggle === true ? (
        <Button
          label={"Add New"}
          className={"buttonDiv"}
          onClick={toggleButton}
        />
      ) : (
        <div className="modalBlur">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { times: [0, 0.3, 1] } }}
            className="FormMainDiv"
          >
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="title" className="labelDesign">
                Title
              </label>
              <input
                type="text"
                autoComplete="off"
                name="title"
                value={inputValue.title}
                className="inputDesign"
                onChange={(e) => {
                  handleInput(e);
                }}
              />
              <label htmlFor="body" className="labelDesign">
                Body
              </label>
              <input
                type="text"
                autoComplete="off"
                name="body"
                value={inputValue.body}
                className="inputDesign"
                onChange={(e) => {
                  handleInput(e);
                }}
              />
              <div>
                <Button
                  onClick={showToastMessage}
                  label={"Add"}
                  className={"FormButton"}
                />
                {/* <motion.button
                  type="submit"
                  onClick={showToastMessage}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  //   onHoverStart={() => console.log("hover started!")}
                  className="FormButton"
                >
                  Add
                </motion.button> */}
                <Button
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  label={"Cancel"}
                  className={"FormButton"}
                />
                {/* <motion.button
                  type="submit"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  //   onHoverStart={() => console.log("hover started!")}
                  className="FormButton"
                >
                  Cancel
                </motion.button> */}
              </div>
            </form>
          </motion.div>
        </div>
      )}
      <ToastContainer />
      <Table
        data={data}
        removeItem={() => setModal(true)}
        editData={editPost}
        setId={setId}
      />
    </>
  );
};

export default Form;
