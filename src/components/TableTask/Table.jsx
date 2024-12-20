import React, { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Table = ({ data, removeItem, editData, setId }) => {
  return (
    <div className="tableMaindiv">
      <table>
        <thead>
          {data?.map((item, index) => (
            <tr className="trDesign" key={index}>
              <td className="tdDesign">{index + 1}</td>
              <td className="tdDesign">{item.title}</td>
              <td className="tdDesign">{item.body}</td>
              <td className="tdDesign">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  // onHoverStart={() => console.log("hover started!")}
                >
                  <FaEdit
                    className="editIcon"
                    onClick={() => {
                      editData(index);
                    }}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  // onHoverStart={() => console.log("hover started!")}
                >
                  <MdDeleteForever
                    className="deleteIcon"
                    onClick={() => {
                      setId(index);
                      removeItem(index);
                    }}
                  />
                </motion.div>
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default Table;
