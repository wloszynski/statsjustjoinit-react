import React from "react";

import images from "../../imgs";

import classes from "./StatisticsGraph.module.css";

const statisticsGraph = (props) => {
  let img = null;
  if (props.image) {
    const skill = props.image.slice(1);
    console.log(skill);

    img = images.filter((el) => {
      return el[0] === skill;
    });
  }

  return (
    <div className={classes.StatisticsGraph}>
      <img src={img[0][1]} alt="" />
    </div>
  );
};

export default statisticsGraph;
