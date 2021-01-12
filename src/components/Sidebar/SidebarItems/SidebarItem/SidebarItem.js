import React from "react";

import classes from "./SidebarItem.module.css";

const sidebarItem = () => {
  return (
    <div className={classes.SidebarItem}>
      <img
        src="https://cdn.iconscout.com/icon/free/png-512/java-43-569305.png"
        alt="java"
      />
      <span>java</span>
    </div>
  );
};

export default sidebarItem;
