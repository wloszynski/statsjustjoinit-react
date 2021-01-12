import React, { Fragment } from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.css";

const navigationItems = (props) => {
  let navigationItems = null;
  if (props.items) {
    navigationItems = props.items.map((item, index) => {
      return <NavigationItem key={index} content={item.content} />;
    });
  }

  return <Fragment>{navigationItems}</Fragment>;
};

export default navigationItems;
