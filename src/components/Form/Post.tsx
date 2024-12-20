import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

type User = {
  data: User;
  id: number;
  title: string;
  body: string;
};
const Post = () => {
  const [result, setResult] = useState<User[]>([]);
  const [data, setData] = useState({
    title: "",
    body: "",
  });
  const [updataData, setUpdataData] = useState({});
  const [buttonData, setButtonData] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setResult(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log("error occurred", err);
      });
  }, []);
  const handleDelete = (id: number) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setResult(result.filter((product) => product.id !== id));
    // setResult(res.data);
    // console.log(result);
  };
  const addPostData = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", updataData)
      .then((res) => {
        console.log(res);

        if (res.status === 201) {
          setResult([...result, res.data]);
          setData({ title: "", body: "" });
        }
      });
  };
  const handleFormData = (e: {
    preventDefault: () => void;
    nativeEvent: { submitter: { value: any } };
  }) => {
    e.preventDefault();
    addPostData();
  };
  const handleSaveData = (id: number) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
      .then((res) => {
        console.log(res);
        setButtonData(true);

        // setUpdataData(res.data);
        // console.log(res.data);
        setResult([...result, res.data]);
        setData({ title: "", body: "" });
      });
  };
  const handleUpdateData = (id: number) => {
    // axios
    //   .put(`https://jsonplaceholder.typicode.com/posts/${id}`, data)
    //   .then((res) => {
    result.filter((product) => product.id !== id);
    // console.log(res.data);
    setData(result[id - 1]);
    setButtonData(false);
    // result.splice(id - 1, 0, res.data);
    // setResult([...result, res.data]);
    // });
    // });
    console.log(data);
  };
  const handleInput = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    // console.log(data);
  };
  return (
    <>
      <form
        onSubmit={() => {
          handleFormData;
        }}
      >
        <input
          type="text"
          name="title"
          className="addInputdesign"
          value={data.title}
          onChange={handleInput}
        />
        <input
          type="text"
          name="body"
          className="addInputdesign"
          value={data.body}
          onChange={handleInput}
        />
        <button>Add</button>
      </form>
      <div className="postdivdesign">
        {/* {result.map((item) => {
          const { id, title, body } = item;
          return (
            <div key={id} className="mapdivdesign">
              <p className="iddesign">{id}</p>
              <p className="titledesign">{title}</p>
              <p className="bodydesign">{body}</p>
              {buttonData === true ? (
                <button
                  className="editButton"
                  onClick={() => {
                    handleUpdateData(id);
                  }}
                >
                  Edit
                </button>
              ) : (
                <button
                  className="editButton"
                  onClick={() => {
                    handleSaveData(id);
                  }}
                >
                  save
                </button>
              )}
              <button className="deleteButton" onClick={() => handleDelete(id)}>
                Delete
              </button>
            </div>
          );
        })} */}
        <table className="tabledesign">
          <tr className="trdesigncss">
            <th className="thdesigncss">Id</th>
            <th className="thdesigncss">Title</th>
            <th className="thdesigncss">Body</th>
            <th className="thdesigncss">Action</th>
          </tr>
          {result.map((user) => (
            <tr className="trdesigncss" key={user.id}>
              <td className="tddesigncss">{user.id}</td>
              <td className="tddesigncss">{user.title}</td>
              <td className="tddesigncss">{user.body}</td>
              <td className="tddesigncss">
                {buttonData === true ? (
                  <button
                    className="editButton"
                    onClick={() => {
                      handleUpdateData(user.id);
                    }}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    className="editButton"
                    onClick={() => {
                      handleSaveData(user.id);
                    }}
                  >
                    save
                  </button>
                )}
                <button
                  className="deleteButton"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default Post;
