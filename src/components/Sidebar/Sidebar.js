import React from "react";

import SidebarItem from "./SidebarItems/SidebarItem/SidebarItem";
import FullScreen from "../UI/FullScreen/FullScreen";

import classes from "./Sidebar.module.css";

const sidebar = (props) => {
  let items = <h2>ERROR</h2>;
  if (props.categories) {
    items = props.categories.map((cat, i) => {
      return <SidebarItem key={i} name={cat} />;
    });
  }
  return (
    <FullScreen headerName="Technology" hide>
      <div className={classes.SidebarItems}>{items}</div>
    </FullScreen>
  );
};

export default sidebar;
