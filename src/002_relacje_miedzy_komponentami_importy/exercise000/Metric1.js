import React from "react";
import classes from "./Metric.module.css";

export const Metric1 = () => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <p className={classes.title}>
          Work <span>•••</span>
        </p>
        <p className={classes.value}>32hrs</p>
        <p className={classes.prevWeekValue}>Last Week - 36hrs</p>
      </div>
    </div>
  );
};
