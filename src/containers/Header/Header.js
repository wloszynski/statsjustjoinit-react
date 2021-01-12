import React, { Component } from "react";

import Contact from "../Contact/Contact";

import classes from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <Contact />
      </div>
    );
  }
}

export default Header;
