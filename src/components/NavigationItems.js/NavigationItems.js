import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationLinks from "./NavigationLinks/NavigationLinks";
import Search from "../Search/Search";

import classes from "./NavigationItems.module.css";

const navigationItems = (props) => {
  return (
    <div className={classes.NavigationItems}>
      <div onClick={props.toggleSearchSidebar}>
        <Search />
      </div>
      <div onClick={props.toggleSidebar}>
        <NavigationItem content="Technology" />
      </div>

      <NavigationLinks
        categories={props.categories}
        categories_menu={props.categories_menu}
      />
    </div>
  );
};

export default navigationItems;
