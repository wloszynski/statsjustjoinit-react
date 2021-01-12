import React, { Component } from "react";

import ContactItems from "../../components/ContactItems/ContactItems";

import classes from "./Contact.module.css";
class Contact extends Component {
  state = {
    items: [
      {
        name: "fab fa-github",
        href: "https://github.com/wloszynski",
      },
      {
        name: "fab fa-linkedin",
        href: "https://www.linkedin.com/in/wloszynski/",
      },
    ],
  };

  render() {
    return (
      <div className={classes.Contact}>
        <ContactItems items={this.state.items} />
      </div>
    );
  }
}

export default Contact;
