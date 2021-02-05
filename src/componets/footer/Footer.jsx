import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";

import "./footer.css";

const Footer = (props) => {
  const [isView, setView] = useState();
  useEffect(() => {
    const filterPath = () => {
      const path =
        props.location.pathname.split("/")[1] || props.location.pathname;
      switch (path) {
        case "/":
          return true;

        case "new":
          return true;

        case "404":
          return true;

        case "adverts":
          return true;

        case "login":
          return false;

        default:
          return false;
      }
    };
    setView(filterPath());
  }, [props.location.pathname]);
  return (
    <footer className={isView ? "view" : "noView"}>
      <div className="footer">
        <div className="footer-text">
          <ul>
            <li>HOME</li>
            <li>ADS</li>
            <li>LOG OUT</li>
          </ul>
        </div>
        <div className="footer-links">
          <FacebookIcon fontSize="default" />
          <WhatsAppIcon fontSize="default" />
          <TwitterIcon fontSize="default" />
        </div>
      </div>
      <div className="dev">
        <span>&#xae;LSP-92</span>
      </div>
    </footer>
  );
};

export default withRouter(Footer);
