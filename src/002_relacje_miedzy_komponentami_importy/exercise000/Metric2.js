import React from "react";
import classes from "./Metric.module.css";

export const Metric2 = () => {
  return (
    <div style={{ background: "green" }} className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <p className={classes.title}>
          Play <span>•••</span>
        </p>
        <p className={classes.value}>10hrs</p>
        <p className={classes.prevWeekValue}>Last Week - 8hrs</p>
      </div>
    </div>
  );
};
