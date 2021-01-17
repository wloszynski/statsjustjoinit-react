import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "../../containers/Header/Header";
import Navigation from "../../containers/Navigation/Navigation";
import Statistics from "../../containers/Statistics/Statistics";

class Layout extends Component {
  render() {
    return (
      <Fragment>
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
