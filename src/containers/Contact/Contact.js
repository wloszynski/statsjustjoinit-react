import React, { Component } from "react";

import ContactItems from "../../components/ContactItems/ContactItems";

import classes from "./Contact.module.css";
class Contact extends Component {
  render() {
    return (
      <div className={classes.Contact}>
        <ContactItems />
      </div>
    );
  }
}

export default Contact;
