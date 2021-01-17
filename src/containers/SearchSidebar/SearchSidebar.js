import React, { Component } from "react";

import SidebarItem from "../../components/Sidebar/SidebarItems/SidebarItem/SidebarItem";

import images from "../../imgs";

import classes from "./SearchSidebar.module.css";

class SearchSidebar extends Component {
  state = {
    categories: [
      "jobs",
      "all",
      "javascript",
      "html",
      "php",
      "ruby",
      "python",
      "java",
      "net",
      "scala",
      "c",
      "mobile",
      "testing",
      "devops",
      "ux",
      "pm",
      "game",
      "analytics",
      "security",
      "data",
      "go",
      "sap",
      "support",
      "other",
    ],
    regex: "",
  };

  onChangeHandler = (e) => {
    this.setState({ regex: e.target.value.toUpperCase() });
  };

  onClickHandler = (e) => {
    this.setState({ regex: "" });
    this.props.toggleSearchSidebar();
  };
  render() {
    let styles = classes.FullScreen;

    // hiding Sidebar when state in Navigation.js is false
    if (!this.props.showSearchSidebar) {
      styles = classes.FullScreenHidden;
    }

    let items = <h2>ERROR</h2>;
    if (this.state.categories) {
      items = this.state.categories.map((cat, i) => {
        if (cat.search(this.state.regex.toLowerCase()) !== -1) {
          return (
            <SidebarItem key={i} name={images[i][0]} source={images[i][1]} />
          );
        }
        return null;
      });
    }

    return (
      <div className={styles}>
        <div className={classes.Header}>
          <input
            onChange={this.onChangeHandler}
            className={classes.Input}
            placeholder="Search"
            value={this.state.regex}
          />
          <button onClick={this.onClickHandler} className={classes.CloseBtn}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div onClick={this.onClickHandler} className={classes.SidebarItems}>
          {items}
        </div>
      </div>
    );
  }
}

export default SearchSidebar;
