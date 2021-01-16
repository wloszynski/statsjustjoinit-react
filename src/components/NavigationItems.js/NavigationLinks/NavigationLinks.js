import React from "react";

import NavigationLink from "./NavigationLink/NavigationLink";

import imgs from "../../../imgs";

import classes from "./NavigationLinks.module.css";

const navigationLinks = (props) => {
  let links = null;
  if (props.categories) {
    links = props.categories.map((cat, index) => {
      return (
        <NavigationLink
          key={index}
          url={cat}
          name={props.categories_menu[index]}
          source={imgs[index][1]}
        />
      );
    });
  }
  return <div className={classes.NavigationLinks}>{links}</div>;
};

export default navigationLinks;
