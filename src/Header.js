import { IconButton } from "@material-ui/core";
import { Forum, Person } from "@material-ui/icons";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <Person fontSize="large" className="header__icon" />
      </IconButton>
      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="logo"
        className="header__logo"
      />
      <IconButton fontSize="large" className="header__icon">
        <Forum />
      </IconButton>
    </div>
  );
}

export default Header;
