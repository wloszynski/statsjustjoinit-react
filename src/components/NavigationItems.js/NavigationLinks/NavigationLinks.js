import React, { Fragment } from "react";

import NavigationLink from "./NavigationLink/NavigationLink";

import classes from "./NavigationLinks.module.css";

const navigationLinks = () => {
  return (
    <div className={classes.NavigationLinks}>
      <NavigationLink />
      <NavigationLink />
      <NavigationLink />
      <NavigationLink />
      <NavigationLink />
    </div>
  );
};

export default navigationLinks;
