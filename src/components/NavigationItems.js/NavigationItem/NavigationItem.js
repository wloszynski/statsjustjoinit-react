import React from "react";

import classes from "./NavigationItem.module.css";

const navigationItem = (props) => {
  return (
    <div className={classes.NavigationItem}>
      <span>{props.content}</span>
    </div>
  );
};

export default navigationItem;
