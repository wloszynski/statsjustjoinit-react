import React from "react";

import SidebarItems from "./SidebarItems/SidebarItems";
import CloseButton from "../UI/CloseButton/CloseButton";

import classes from "./Sidebar.module.css";

const sidebar = () => {
  return (
    <div className={classes.Sidebar}>
      <div className={classes.Technology}>
        <span>Technology</span>
        <CloseButton />
      </div>
      <SidebarItems />
    </div>
  );
};

export default sidebar;
