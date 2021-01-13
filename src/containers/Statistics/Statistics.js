import React, { Component } from "react";
import axios from "axios";

import StatisticsItems from "../../components/StatisticsItems/StatisticsItems";
import StatisticsGraph from "../../components/StatisticsGraph/StatisticsGraph";

import classes from "./Statistics.module.css";
class Statistics extends Component {
  state = {
    item: null,
  };

  componentDidMount() {
    axios
      .get(`https://api.jsonbin.io/b/5fff1cb668f9f835a3dec1a1`)
      .then((res) => {
        const items = res.data.js;
        this.setState({ item: items });
      });
  }

  render() {
    return (
      <div className={classes.Statistics}>
        <div className={classes.Options}>
          <div className={classes.Appearances}>
            <span>appearances</span>
          </div>
        </div>
        <StatisticsItems items={this.state.item} />
        <StatisticsGraph />
      </div>
    );
  }
}

export default Statistics;
