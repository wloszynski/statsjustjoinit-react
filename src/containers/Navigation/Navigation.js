import React, { Component } from "react";

import NavigationItems from "../../components/NavigationItems.js/NavigationItems";
import Sidebar from "../../components/Sidebar/Sidebar";

import classes from "./Navigation.module.css";
class Navigation extends Component {
  state = {
    items: [{ content: "Technology" }],
    showTechnologyNav: false,
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
    categories_menu: [
      "Jobs",
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
    showSidebar: false,
  };

  toggleSidebar = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  };

  render() {
    return (
      <div className={classes.Navigation}>
        <NavigationItems
          toggleSidebar={() => this.toggleSidebar()}
          categories={this.state.categories}
          items={this.state.items}
          categories_menu={this.state.categories_menu}
          showSidebar={this.state.showSidebar}
          toggleSidebarClick={this.toggleSidebar}
        />
        <Sidebar
          toggleSidebar={() => this.toggleSidebar()}
          categories={this.state.categories}
          showSidebar={this.state.showSidebar}
        />
      </div>
    );
  }
}

export default Navigation;
