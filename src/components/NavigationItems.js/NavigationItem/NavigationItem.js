import React, { Fragment } from "react";

import classes from "./NavigationItem.module.css";

const navigationItem = () => {
  return (
    <Fragment>
      <div className={classes.NavigationItem}>
        <span>Technology</span>
      </div>
      <div className={classes.NavigationItem}>
        <span>Latest</span>
      </div>
    </Fragment>
  );
};

export default navigationItem;
