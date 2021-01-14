import React, { Component, Fragment } from "react";
import { Route, Switch, Ridirect, Redirect } from "react-router-dom";

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
          <Route
            path="/:categopry"
            component={(props) => <Statistics {...props} />}
          />

          {/* <Route path="/all" exact component={Statistics} />
          <Route path="/javascript" exact component={Statistics} />
          <Route path="/python" exact component={Statistics} />
          <Route path="/" exact>
            <Redirect to="/all" />
          </Route> */}
        </Switch>
      </Fragment>
    );
  }
}

export default Layout;
