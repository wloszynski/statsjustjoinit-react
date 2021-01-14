import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

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
        <Switch>
          <Route path="/" component={Statistics} />
        </Switch>
      </Fragment>
    );
  }
}

export default Layout;
