import React from "react";
import { Metric } from "./Metric";

/**
 * Twoim zadaniem jest dynamiczne wyświetlenie metryk określonych w tablicy
 *
 * zadanie już znane na wyrost :) natomiast tym razem zrobimy to już ostatecznie najbardziej poprawnie
 *
 * musisz przemapować się po tablicy METRICS i wywołać dostosowany komponent Metric
 * komponent znany - nie należy go implementować od poczatku - możesz go przekopiować do tego samego folderu
 * i dostosować tak żeby przyjmował obiekt jako prop - może przyjmować też dane oddzielnie czyli 3 stringi
 * label, currentWeek oraz prevWeek
 *
 * do rozwiązania musisz użyć metody na tablicach map i wywoływać w nim komponent Metric
 */

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
