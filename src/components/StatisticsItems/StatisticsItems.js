import React from "react";

import StatisticsItem from "./StatisticsItem/StatisticsItem";

import classes from "./StatisticsItems.module.css";

const statisticsItems = (props) => {
  let items = null;
  if (props.items) {
    items = props.items.map((item) => {
      return <StatisticsItem key={item.id} item={item} />;
    });
  }

  return <div className={classes.StatisticsItems}>{items}</div>;
};

export default statisticsItems;
