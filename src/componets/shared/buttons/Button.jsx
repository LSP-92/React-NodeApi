import React from "react";
import "./buttons.css";

const Button = ({ className, title, type, onclick }) => (
  <button
    type={type || "button"}
    className={`button ${className}`}
    onClick={onclick}
  >
    {title}
  </button>
);

export default Button;
