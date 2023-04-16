import React from "react";
import classes from "./Metric.module.css";

export const Metric3 = () => {
  return (
    <div style={{ background: "pink" }} className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <p className={classes.title}>
          Study <span>•••</span>
        </p>
        <p className={classes.value}>4hrs</p>
        <p className={classes.prevWeekValue}>Last Week - 7hrs</p>
      </div>
    </div>
  );
};
