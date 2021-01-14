import React from "react";

import classes from "./StatisticsItem.module.css";

const statisticsItem = (props) => {
  return (
    <div className={classes.StatisticsItem}>
      <h4>{props.name}</h4>
      <h4>{props.counter}</h4>
    </div>
  );
};

export default statisticsItem;
