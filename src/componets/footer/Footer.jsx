import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";

import "./footer.css";

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer-text">
        <ul>
          <li>HOME</li>
          <li>ADS</li>
          <li>LOG OUT</li>
        </ul>
      </div>
      <div className="footer-links">
        <FacebookIcon fontSize="large" />
        <WhatsAppIcon fontSize="large" />
        <TwitterIcon fontSize="large" />
      </div>
    </div>
    <div className="dev">
      <span>&#xae;LSP-92</span>
    </div>
  </footer>
);

export default Footer;
