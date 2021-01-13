import React, { Component } from "react";

import StatisticsItems from "../../components/StatisticsItems/StatisticsItems";
import StatisticsGraph from "../../components/StatisticsGraph/StatisticsGraph";

import classes from "./Statistics.module.css";
class Statistics extends Component {
  state = {
    js: [
      { id: "1", skill: "javascript", counter: "437" },
      { id: "2", skill: "react", counter: "187" },
      { id: "3", skill: "typescript", counter: "157" },
      { id: "4", skill: "node.js", counter: "142" },
      { id: "5", skill: "reactjs", counter: "120" },
      { id: "6", skill: "css", counter: "109" },
      { id: "7", skill: "html5", counter: "95" },
      { id: "8", skill: "html", counter: "89" },
      { id: "9", skill: "angular", counter: "67" },
      { id: "10", skill: "vue.js", counter: "48" },
      { id: "11", skill: "redux", counter: "43" },
      { id: "12", skill: "css3", counter: "43" },
      { id: "13", skill: "english", counter: "41" },
      { id: "14", skill: "git", counter: "29" },
      { id: "15", skill: "react native", counter: "26" },
      { id: "16", skill: "aws", counter: "24" },
    ],
  };
  render() {
    return (
      <div className={classes.Statistics}>
        <div className={classes.Options}>
          <div className={classes.Appearances}>
            <span>appearances</span>
          </div>
        </div>
        <StatisticsItems items={this.state.js} />
        <StatisticsGraph />
      </div>
    );
  }
}

export default Statistics;
