import React from "react";
import "./buttons.css";

const Button = ({ className, title, type, onclick, ...props }) => (
  <button
    type={type || "button"}
    className={`button ${className}`}
    onClick={onclick}
    {...props}
  >
    {title}
  </button>
);

export default Button;
