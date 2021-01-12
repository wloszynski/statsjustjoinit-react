import React from "react";

import classes from "./ContactItem.module.css";

const contactItem = (props) => {
  return (
    <div className={classes.ContactItem}>
      <a href={props.href} target="_blank" rel="noreferrer">
        <i className={props.name}></i>
      </a>
    </div>
  );
};

export default contactItem;
