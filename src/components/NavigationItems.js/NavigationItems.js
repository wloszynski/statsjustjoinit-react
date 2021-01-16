import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationLinks from "./NavigationLinks/NavigationLinks";

import classes from "./NavigationItems.module.css";

const navigationItems = (props) => {
  let navigationItems = null;
  if (props.items) {
    navigationItems = props.items.map((item, index) => {
      return <NavigationItem key={index} content={item.content} />;
    });
  }

  return (
    <div className={classes.NavigationItems}>
      <div onClick={props.toggleSidebar}>{navigationItems}</div>
      <NavigationLinks
        categories={props.categories}
        categories_menu={props.categories_menu}
      />
    </div>
  );
};

export default navigationItems;
