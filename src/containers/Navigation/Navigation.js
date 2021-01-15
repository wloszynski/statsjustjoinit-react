import React, { Component } from "react";

import NavigationItems from "../../components/NavigationItems.js/NavigationItems";
import Search from "../../components/Search/Search";

import classes from "./Navigation.module.css";
class Navigation extends Component {
  state = {
    items: [{ content: "Technology" }],
    showTechnologyNav: false,
    categories: [
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
    categories_menu: [
      "All",
      "JS",
      "HTML",
      "PHP",
      "Ruby",
      "Python",
      "Java",
      ".Net",
      "Scala",
      "C",
      "Mobile",
      "Testing",
      "DevOps",
      "UX/UI",
      "PM",
      "Game",
      "Analytics",
      "Security",
      "Data",
      "Go",
      "SAP",
      "Support",
      "Other",
    ],
    hideSidebar: true,
  };

  toggleSidebar = () => {
    this.setState({ hideSidebar: !this.state.hideSidebar });
  };

  render() {
    return (
      <div className={classes.Navigation}>
        <Search />
        <NavigationItems
          categories={this.state.categories}
          items={this.state.items}
          categories_menu={this.state.categories_menu}
          hideSidebar={this.state.hideSidebar}
          toggleSidebarClick={this.toggleSidebar}
        />
      </div>
    );
  }
}

export default Navigation;
