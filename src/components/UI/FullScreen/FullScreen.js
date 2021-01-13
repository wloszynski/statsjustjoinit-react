import React from "react";

import CloseButton from "../CloseButton/CloseButton";

import classes from "./FullScreen.module.css";

const fullScreen = (props) => {
  let styles = classes.FullScreen;
  if (props.hide) {
    styles = [classes.FullScreen, classes.Hidden].join(" ");
  }
  return (
    <div className={styles}>
      <div className={classes.Header}>
        <span>{props.headerName}</span>
        <CloseButton />
      </div>
      {props.children}
    </div>
  );
};

export default fullScreen;
