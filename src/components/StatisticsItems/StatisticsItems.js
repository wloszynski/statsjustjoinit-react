import React from "react";

import StatisticsItem from "./StatisticsItem/StatisticsItem";

import classes from "./StatisticsItems.module.css";

const statisticsItems = () => {
  return (
    <div className={classes.StatisticsItems}>
      <StatisticsItem />
      <StatisticsItem />
    </div>
  );
};

export default statisticsItems;
