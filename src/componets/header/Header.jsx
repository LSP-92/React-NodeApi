import React from "react";

import Photo from "../shared/Photo";
import img from "../../assets/img/icons8-automatic-64.png";
import Navbar from "../navbar/Navbar";
import "./header.css";

const Header = (state) => {
  return (
    <header className="headerClass">
      <div className="logo">
        <Photo src={img} />
        <h2 className="title">NodeApi</h2>
      </div>
      <Navbar state={state} />
    </header>
  );
};

export default Header;
