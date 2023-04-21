import React from "react";
import "./StyleCSSExercise.css";
/**
 * Zadanie
 *
 * Twoim zadaniem jest odwzorowanie designu z pliku design.png
 * do ostylowania komponentu użyj zewnętrznego pliku css który też musisz stworzyć
 * i zaimportować
 *
 * do wykonania zadania będziesz potrzebować/ała edytować/uzupełnić poniższy "HTML"
 * tak żeby style pisane w pliku ze stylami zadziałały
 *
 *
 * hints:
 * - w pliku solution.txt dostępne jest komponent uzupełniony o klasy
 * - w pliku solution.css dostepne są style które stylują komponent zgodnie z designem
 */

export const StyleCSSExercise = () => {
  return (
    <article className="main-container">
      <p className="title">Style CSS Exercise</p>
      <span className="subtitle">Testowy span</span>
      <p style={{ display: "inline-block", margin: 5, padding: 5 }}>
        przykładowy ostylowany paragraf
      </p>
      <p>
        przekreślony text ten styl przyda się jeszcze później żeby go uzyskać
        skorzystaj z właściowści text-decoration{" "}
      </p>
    </article>
  );
};
