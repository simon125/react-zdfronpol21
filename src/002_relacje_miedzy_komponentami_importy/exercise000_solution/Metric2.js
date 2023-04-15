import React from "react";
import classes from "./Metric.module.css";

export const Metric2 = () => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <p className={classes.label}>
          Play <span>•••</span>
        </p>
        <p className={classes.output}>10hrs</p>
        <p className={classes.lastWeekOutput}>Last Week - 8hrs</p>
      </div>
    </div>
  );
};
