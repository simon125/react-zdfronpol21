import React from "react";
import classes from "./StyleCSSModulesExercise.module.css";
/**
 * Twoim zadaniem jest odwzorowanie designu z pliku design.png
 * do ostylowania komponentu użyj zewnętrzengo pliku ze stylami
 * oraz podejćia css modules - pamiętaj o poprawnym zaimportowaniu styli
 *
 * plik ze stylami musisz uprzednio stworzyć w tym samym folderze - pamiętaj o odpowiednim suffixie w nazwie
 */

export const StyleCSSModulesExercise = () => {
  return (
    <article>
      <p>Style CSS Modules</p>
      <p>Zadania do zrobienia</p>
      <ul className="klasa1 klasa2 klasa3">
        <li className={classes.przykladowyLineItem}>Pouczyć się JSa</li>
        <li className={`${classes.przykladowyLineItem} ${classes.lineThrough}`}>
          Pouczyć się CSSa
        </li>
        <li className={classes.niebieskiLineItem}>Pouczyć się Reacta</li>
      </ul>
    </article>
  );
};
