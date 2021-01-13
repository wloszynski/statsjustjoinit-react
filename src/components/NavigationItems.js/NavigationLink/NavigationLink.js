import React, { Fragment } from "react";

import classes from "./NavigationLink.module.css";

const navigationLink = () => {
  return (
    <Fragment>
      <a href="#" className={classes.NavigationLink}>
        <div className={classes.NavigationImage}>
          <img
            src="https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png"
            alt=""
          />
        </div>

        <span>JS</span>
      </a>
    </Fragment>
  );
};

export default navigationLink;
