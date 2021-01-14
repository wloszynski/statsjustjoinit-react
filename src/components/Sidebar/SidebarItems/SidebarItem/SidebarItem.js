import React from "react";
import { Link } from "react-router-dom";
import classes from "./SidebarItem.module.css";

const sidebarItem = (props) => {
  return (
    <Link to={"/" + props.name} className={classes.SidebarItem}>
      <img
        src="https://cdn.iconscout.com/icon/free/png-512/java-43-569305.png"
        alt="java"
      />
      <span>{props.name}</span>
    </Link>
  );
};

export default sidebarItem;
