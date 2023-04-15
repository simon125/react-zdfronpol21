import React from "react";
import commonClasses from "./Common.module.css";
import { Metric } from "./Metric";

export const Statistics = () => {
  return (
    <div className={commonClasses.container}>
      <p className={commonClasses.text}>Statistics.js</p>
      <div
        style={{ display: "flex", justifyContent: "space-between", gap: 20 }}
      >
        <Metric />
        <Metric />
        <Metric />
      </div>
    </div>
  );
};
