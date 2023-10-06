import React from "react";
import styles from "./button.module.css";
const Button = ({ children, onClick, color }) => {
  const { button, primary } = styles;
  return (
    <button
      onClick={onClick}
      className={`${button} ${color ? styles[color] : primary}`}
    >
      {children}
    </button>
  );
};

export default Button;
