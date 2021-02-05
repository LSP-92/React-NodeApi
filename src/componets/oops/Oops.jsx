import React from "react";
import "./oops.css";
const Oops = ({ message, onclick }) => {
  return (
    <div className="oops">
      <h3 onClick={onclick}> {message}</h3>
    </div>
  );
};

export default Oops;
