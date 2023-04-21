import React from "react";
import classes from "./Metric.module.css";
/**
 * Twoim zadaniem jest odwzorowanie designu dostępnego w pliku design.png
 * dokładne odzworowanie nie jest konieczne - przykładowe rozwiązanie które
 * jest w zupełności wystarczające jest dostępne w pliku expectedResult.png
 *
 * do rozwiązania zadania możesz użyć dowolnej metody stylowania komponentu (preferowane css modules)
 */

export const Metric = () => {
  return (
    <article>
      <p>Metric</p>
      <div className={classes.outerContainer}>
        <div className={classes.innerContainer}>
          <p className={classes.title}>
            Work <span>•••</span>
          </p>
          <p className={classes.value}>32hrs</p>
          <p className={classes.prevWeekValue}>Last Week - 36hrs</p>
        </div>
      </div>
    </article>
  );
};
