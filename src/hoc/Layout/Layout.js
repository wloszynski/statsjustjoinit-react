import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

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
        <Switch>
          <Route path="/:category" exact component={Statistics} />
          <Route path="/" exact>
            <Redirect to="/all" />
          </Route>
        </Switch>
      </Fragment>
    );
  }
}

export default Layout;
