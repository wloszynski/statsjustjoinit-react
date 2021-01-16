import React from "react";
import { Link } from "react-router-dom";
import classes from "./SidebarItem.module.css";

const sidebarItem = (props) => {
  return (
    <Link to={"/" + props.name} className={classes.SidebarItem}>
      <img src={props.source} alt="java" />
      <span>{props.name}</span>
    </Link>
  );
};

export default sidebarItem;
