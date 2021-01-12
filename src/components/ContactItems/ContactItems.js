import React, { Fragment } from "react";

import ContactItem from "./ContactItem/ContactItem";
import classes from "./ContactItems.module.css";

const contactItems = () => {
  return (
    <Fragment>
      <ContactItem />
    </Fragment>
  );
};

export default contactItems;
