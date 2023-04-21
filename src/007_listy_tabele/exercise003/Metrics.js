import React from "react";
import { Metric } from "./Metric";

const METRICS = [
  { label: "Work", currentWeek: "32", prevWeek: "36" },
  { label: "Play", currentWeek: "10", prevWeek: "8" },
  { label: "Study", currentWeek: "4", prevWeek: "7" },
];

export const MetricsByProps = () => {
  return (
    <article>
      <p>Metrics</p>
      <div style={{ display: "flex", gap: 25 }}>
        {METRICS.map((metric) => (
          <Metric metric={metric} />
        ))}
      </div>
    </article>
  );
};
