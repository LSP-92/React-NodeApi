import { Link } from "react-router-dom";

import "./app";
import "./navbar.css";

const Navbar = ({ state }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className={state ? "on" : "off"}>Home</div>
      </Link>
      <Link to="/ads">
        <div className={state ? "on" : "off"}>Ads</div>
      </Link>
      <Link to="/login">
        <div className={state ? "on" : "off"}>LogOut</div>
      </Link>
    </div>
  );
};

export default Navbar;
