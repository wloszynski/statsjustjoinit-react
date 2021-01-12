import React, { Component } from "react";

import NavigationItems from "../../components/NavigationItems.js/NavigationItems";

import classes from "./Navigation.module.css";
class Navigation extends Component {
  render() {
    return (
      <div className={classes.Navigation}>
        <NavigationItems />
      </div>
    );
  }
}

export default Navigation;
