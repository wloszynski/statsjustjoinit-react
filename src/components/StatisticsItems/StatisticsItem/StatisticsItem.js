import React from "react";

import classes from "./StatisticsItem.module.css";

const statisticsItem = (props) => {
  const border_color = "#" + props.color;
  return (
    <div
      className={classes.StatisticsItem}
      style={{ borderColor: border_color }}
    >
      <h4>{props.name}</h4>
      <h4>{props.counter}</h4>
    </div>
  );
};

export default statisticsItem;
