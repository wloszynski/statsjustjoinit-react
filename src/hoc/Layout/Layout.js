import React, { Component, Fragment } from "react";

import Header from "../../containers/Header/Header";
import Navigation from "../../containers/Navigation/Navigation";
import Statistics from "../../containers/Statistics/Statistics";

import Sidebar from "../../components/Sidebar/Sidebar";
class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Sidebar />
        <Header />
        <Navigation />
        <Statistics />
      </Fragment>
    );
  }
}

export default Layout;
