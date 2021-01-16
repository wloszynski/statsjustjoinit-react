import React from "react";

import SidebarItem from "./SidebarItems/SidebarItem/SidebarItem";

import images from "../../imgs";

import classes from "./Sidebar.module.css";

const sidebar = (props) => {
  let styles = props.hideSidebar ? classes.Hidden : classes.FullScreen;
  let items = <h2>ERROR</h2>;
  if (props.categories) {
    items = props.categories.map((cat, i) => {
      return <SidebarItem key={i} name={images[i][0]} source={images[i][1]} />;
    });
  }

  return (
    <div className={styles}>
      <div className={classes.Header}>
        <span>Technology</span>
        <button className={classes.CloseBtn}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className={classes.SidebarItems}>{items}</div>
    </div>
  );
};

export default sidebar;
