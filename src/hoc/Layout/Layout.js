import React, { Component, Fragment } from "react";

import Header from "../../containers/Header/Header";
import Navigation from "../../containers/Navigation/Navigation";
import Statistics from "../../containers/Statistics/Statistics";

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Navigation />
        <Statistics />
      </Fragment>
    );
  }
}

export default Layout;
