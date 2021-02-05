import React from "react";
import { Link } from "react-router-dom";
import { logOut } from "../../lib/axiosGlobal";

import "./navbar.css";

const Navbar = ({ home, ads, logout, adnew }) => {
  return (
    <div className="navbar">
      <div className={home ? "on" : "off"}>
        <Link to="/">
          <span>Home</span>
        </Link>
      </div>
      <Link
        to="/"
        onClick={() => {
          logOut();
        }}
      >
        <div className={logout ? "on" : "off"}>LogOut</div>
      </Link>
      <Link to="/new">
        <div className={adnew ? "on" : "off"}>New Ad</div>
      </Link>
    </div>
  );
};

export default Navbar;
