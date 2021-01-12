import React, { Component } from "react";

import Title from "../../components/Title/Title";
import Contact from "../Contact/Contact";

import classes from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <Title />
        <Contact />
      </div>
    );
  }
}

export default Header;
