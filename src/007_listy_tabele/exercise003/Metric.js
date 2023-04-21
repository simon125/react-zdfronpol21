import React from "react";
import classes from "./solution.module.css";

export const Metric = (props) => {
  const { metric } = props;
  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <p className={classes.label}>
          {metric.label} <span>•••</span>
        </p>
        <p className={classes.output}>{metric.currentWeek}hrs</p>
        <p className={classes.lastWeekOutput}>
          Last Week - {metric.prevWeek}hrs
        </p>
      </div>
    </div>
  );
};
