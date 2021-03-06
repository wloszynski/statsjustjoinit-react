import React from "react";

import ContactItem from "./ContactItem/ContactItem";
import classes from "./ContactItems.module.css";

const contactItems = (props) => {
  let contactItems = null;

  if (props.items) {
    contactItems = props.items.map((item, index) => {
      return <ContactItem key={index} name={item.name} href={item.href} />;
    });
  }
  return <div className={classes.ContactItems}>{contactItems}</div>;
};

export default contactItems;
