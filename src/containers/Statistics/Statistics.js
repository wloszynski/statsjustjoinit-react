import React, { Component } from "react";

import StatisticsItems from "../../components/StatisticsItems/StatisticsItems";
import StatisticsGraph from "../../components/StatisticsGraph/StatisticsGraph";

import classes from "./Statistics.module.css";
class Statistics extends Component {
  render() {
    return (
      <div className={classes.Statistics}>
        <StatisticsItems />
        <StatisticsGraph />
      </div>
    );
  }
}

export default Statistics;
