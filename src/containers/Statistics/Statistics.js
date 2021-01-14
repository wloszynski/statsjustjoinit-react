import React, { Component, Fragment } from "react";
import axios from "axios";

import StatisticsItems from "../../components/StatisticsItems/StatisticsItems";
import StatisticsGraph from "../../components/StatisticsGraph/StatisticsGraph";

import classes from "./Statistics.module.css";
class Statistics extends Component {
  state = {
    items: null,
  };

  componentDidMount() {
    console.log(this.props.location.pathname);
    axios
      .get(
        `https://statsjustjoinit-default-rtdb.firebaseio.com/skills${this.props.location.pathname}.json`
      )
      .then((res) => {
        const items = res.data;
        console.log(items);
        this.setState({ items: items });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let items = <h1>ERROR HAS OCCURRED</h1>;
    if (this.state.items) {
      items = (
        <Fragment>
          <StatisticsItems items={this.state.items} />
          <StatisticsGraph />
        </Fragment>
      );
    }

    return (
      <div className={classes.Statistics}>
        <div className={classes.Options}>
          <div className={classes.Appearances}>
            <span>appearances</span>
          </div>
        </div>
        {items}
      </div>
    );
  }
}

export default Statistics;
