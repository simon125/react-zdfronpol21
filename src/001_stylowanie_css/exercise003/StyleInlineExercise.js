import React from "react";
import "./style.css";
/**
 *
 * Twoim zadaniem jest odwzorowanie designu z pliku design.png
 * do ostylowania komponentu użyj styli inlinowych
 *
 * stworzenie kółka z elementu div i css-a może być nie oczywiste
 * zachęcam do próby znalezienia odpowiedzi na to pytanie (szukanie jak coś zaimplementować - prawie chleb powszedni w codziennej pracy)
 * pomocne może być szukanie w googlu za pomocą frazy "how to create circle in css"
 *
 * pamiętaj że możesz również pójść na skróty i podejrzeć plik z rozwiązaniem (solution.txt)
 *
 */

export const StyleInlineExercise = () => {
  return (
    <article style={{ verticalAlign: "bottom" }}>
      <p> Style Inline Exercise</p>
      <div
        style={{
          width: 50,
          height: 50,
          background: "blue",
          display: "inline-block",
          borderRadius: "50%",
          color: "white",
          textAlign: "center",
          lineHeight: "50px",
        }}
      >
        1
      </div>
      <div
        style={{
          width: 50,
          height: 50,
          background: "blue",
          display: "inline-flex",
          borderRadius: "50%",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        2
      </div>
      <div
        style={{
          width: 50,
          height: 50,
          background: "blue",
          display: "inline-block",
          borderRadius: "50%",
        }}
      ></div>
      {/* <div> */}
      <div className="kolo1">1</div>
      <div className="kolo2">2</div>
      <div className="kolo3">3</div>
      {/* </div> */}
    </article>
  );
};
