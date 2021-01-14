import React from "react";

import SidebarItem from "./SidebarItem/SidebarItem";

import classes from "./SidebarItems.module.css";

const sidebarItems = (props) => {
  let items = <h2>ERROR</h2>;
  if (props.categories) {
    items = props.categories.map((cat, i) => {
      return <SidebarItem key={i} name={cat} />;
    });
  }
  return <div className={classes.SidebarItems}>{items}</div>;
};

export default sidebarItems;
