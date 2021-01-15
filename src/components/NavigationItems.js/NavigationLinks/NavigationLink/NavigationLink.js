import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationLink.module.css";

const navigationLink = (props) => {
  return (
    <Fragment>
      <NavLink
        to={"/" + props.url}
        className={classes.NavigationLink}
        activeClassName={classes.active}
      >
        <div className={classes.NavigationImage}>
          <img src={props.source} alt={props.name} />
        </div>

        <span>{props.name}</span>
      </NavLink>
    </Fragment>
  );
};

export default navigationLink;
