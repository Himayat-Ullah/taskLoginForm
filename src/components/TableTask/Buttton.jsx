import React from "react";
import { motion } from "framer-motion";

const Button = ({ onClick, label, className }) => {
  return (
    <div className={className}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        // onHoverStart={() => console.log("hover started!")}
        onClick={onClick}
      >
        {label}
      </motion.button>
    </div>
  );
};

export default Button;
