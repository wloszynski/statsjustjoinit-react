import React, { Component, Fragment } from "react";

import Header from "../../containers/Header/Header";
import Navigation from "../../containers/Navigation/Navigation";
import Statistics from "../../containers/Statistics/Statistics";

import Sidebar from "../../components/Sidebar/Sidebar";
import SearchSidebar from "../../components/SearchSidebar/SearchSidebar";
class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Sidebar />
        <SearchSidebar />
        <Header />
        <Navigation />
        <Statistics />
      </Fragment>
    );
  }
}

export default Layout;
