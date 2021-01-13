import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationLink from "./NavigationLink/NavigationLink";

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
      {navigationItems}
      <NavigationLink />
      <NavigationLink />
      <NavigationLink />
      <NavigationLink />
      <NavigationLink />
      <NavigationLink />
      <NavigationLink />
      <NavigationLink />
      <NavigationLink />
    </div>
  );
};

export default navigationItems;
