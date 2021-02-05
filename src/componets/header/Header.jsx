import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Photo from "../shared/Photo";
import img from "../../assets/img/icons8-automatic-64.png";
import Navbar from "../navbar/Navbar";
import "./header.css";

const Header = (props) => {
  const view = {
    home: true,
    ads: true,
    logout: true,
    adnew: true,
  };
  const [isView, setView] = useState(view);
  useEffect(() => {
    const filterPath = () => {
      console.log(props.location.pathname);
      const path =
        props.location.pathname.split("/")[1] || props.location.pathname;
      switch (path) {
        case "/":
          return {
            home: false,
            ads: true,
            logout: true,
            adnew: true,
          };

        case "new":
          return {
            home: true,
            ads: true,
            logout: true,
            adnew: false,
          };

        case "404":
          return {
            home: true,
            ads: false,
            logout: false,
            adnew: false,
          };

        case "adverts":
          return {
            home: true,
            ads: false,
            logout: true,
            adnew: true,
          };

        case "login":
          return {
            home: false,
            ads: false,
            logout: false,
            adnew: false,
          };

        default:
          return {
            home: false,
            ads: false,
            logout: false,
            adnew: false,
          };
      }
    };
    setView(filterPath());
  }, [props.location.pathname]);

  return (
    <header className="headerClass">
      <div className="logo">
        <Photo src={img} />
        <h2 className="title">NodePop</h2>
      </div>
      <Navbar
        home={isView.home}
        ads={isView.ads}
        logout={isView.logout}
        adnew={isView.adnew}
      />
    </header>
  );
};

export default withRouter(Header);
