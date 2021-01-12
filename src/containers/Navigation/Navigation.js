import React, { Component } from "react";

import NavigationItems from "../../components/NavigationItems.js/NavigationItems";
import Search from "../../components/Search/Search";

import classes from "./Navigation.module.css";
class Navigation extends Component {
  render() {
    return (
      <div className={classes.Navigation}>
        <Search />
        <NavigationItems />
      </div>
    );
  }
}

export default Navigation;
