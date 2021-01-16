import React from "react";

import SidebarItem from "./SidebarItems/SidebarItem/SidebarItem";

import images from "../../imgs";

import classes from "./Sidebar.module.css";

const sidebar = (props) => {
  let styles = classes.FullScreen;

  // hiding Sidebar when state in Navigation.js is false
  if (!props.showSidebar) {
    styles = classes.FullScreenHidden;
  }

  let items = <h2>ERROR</h2>;
  if (props.categories) {
    items = props.categories.map((cat, i) => {
      console.log(images[i][0]);

      return <SidebarItem key={i} name={images[i][0]} source={images[i][1]} />;
    });
  }

  return (
    <div className={styles}>
      <div className={classes.Header}>
        <span>Technology</span>
        <button onClick={props.toggleSidebar} className={classes.CloseBtn}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div onClick={props.toggleSidebar} className={classes.SidebarItems}>
        {items}
      </div>
    </div>
  );
};

export default sidebar;
