import React from "react";

import StatisticsItem from "./StatisticsItem/StatisticsItem";

import classes from "./StatisticsItems.module.css";

const statisticsItems = (props) => {
  let items = null;
  if (props.items) {
    items = props.items.map((item) => {
      return (
        <StatisticsItem
          key={item.id}
          name={item.name}
          counter={item.counter}
          color={Math.floor(Math.random() * 16777215).toString(16)}
        />
      );
    });
  }

  return <div className={classes.StatisticsItems}>{items}</div>;
};

export default statisticsItems;
