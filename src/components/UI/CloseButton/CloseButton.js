import React, { Fragment } from "react";

import classes from "./CloseButton.module.css";

const closeButton = () => {
  return (
    <Fragment>
      <button className={classes.CloseBtn}>
        <i className="fas fa-times"></i>
      </button>
    </Fragment>
  );
};

export default closeButton;
