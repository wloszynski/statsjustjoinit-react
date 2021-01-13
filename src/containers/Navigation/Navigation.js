import React, { Component } from "react";

import NavigationItems from "../../components/NavigationItems.js/NavigationItems";
import Search from "../../components/Search/Search";

import classes from "./Navigation.module.css";
class Navigation extends Component {
  state = {
    items: [{ content: "Technology" }, { content: "Latest" }],
    showTechnologyNav: false,
  };
  render() {
    return (
      <div className={classes.Navigation}>
        <Search />
        <NavigationItems items={this.state.items} />
      </div>
    );
  }
}

export default Navigation;
