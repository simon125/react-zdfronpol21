import React from "react";
import classes from "./Metric.module.css";

export const Metric3 = () => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <p className={classes.label}>
          Study <span>•••</span>
        </p>
        <p className={classes.output}>4hrs</p>
        <p className={classes.lastWeekOutput}>Last Week - 7hrs</p>
      </div>
    </div>
  );
};
