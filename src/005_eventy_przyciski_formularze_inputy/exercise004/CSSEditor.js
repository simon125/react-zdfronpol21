import React, { useState } from "react";

/**
 * Twoim zadaniem jest stworzenie na podstawie designu małego playgrounu dla CSSa.
 * Za pomocą selecta oraz inputów typu radio user powinien móc przełączać style kwadracikowi
 * w czerwonej ramce.
 * Niech user może zmieniać dwa style tego kwadraciku lub kontenerowi
 *
 * styl jaki ma się zmieniać w kwadracie to background
 * styl jaki ma się zmieniać w kontenerze (rodzicu) kwadrata to justifyContent
 *
 * Żeby to osiagnać będziesz potrzebować/potrzebowała dwóch stanów na dwie wartości dla poszczególnych propertisów CSSowych
 *
 * pierwszym rodzajem inputu jest select który wymaga odpowiednich optionów z propertisami value oraz obsłużonym w selekcie
 * eventem onChange
 *
 * drugim rodzajem inputu jest radio button - jest ich klikla każdy z inną "na sztywno" połączoną wartością (value)
 * każdy input typu radio ma obłużony event onChange w którym ma zachodzić aktualizacja stanu
 *
 * przechowywany stan (style które user wybiera) mają być zaaplikowane do kwadracika oraz jego kontera - użyj
 * do tego styli inline-owych
 *
 */

export const CSSEditor = () => {
  const [backgroundColor, setBackgroundColor] = useState("green");
  const [justifyContentValue, setJustifyContentValue] = useState("flex-start");

  const handleRadioButtonChange = (e) => {
    setJustifyContentValue(e.target.value);
  };

  return (
    <article>
      <p>CSSEditor</p>
      <select
        onChange={(e) => setBackgroundColor(e.target.value)}
        value={backgroundColor}
        name=""
        id=""
      >
        <option value="" hidden>
          Select color
        </option>
        <option value="#345312">Red</option>
        <option value="yellow">Yellow</option>
        <option value="rgba(120,120,120,0.7)">RGBA</option>
      </select>

      <input type="color" onChange={(event) => ({})} />

      <input type="range" min={0} max={100} step={10} />

      <label>
        <input
          onChange={handleRadioButtonChange}
          type="radio"
          name="flex"
          value="flex-start"
        />{" "}
        Flex-start
      </label>

      <label>
        <input
          onChange={handleRadioButtonChange}
          type="radio"
          name="flex"
          value="center"
        />{" "}
        Center
      </label>

      <label>
        <input
          onChange={handleRadioButtonChange}
          type="radio"
          name="flex"
          value="flex-end"
        />{" "}
        Flex-end
      </label>

      <b style={{ marginTop: 30, display: "block" }}>Preview</b>
      <div
        style={{
          display: "flex",
          padding: 20,
          margin: 20,
          border: "2px solid red",
          justifyContent: justifyContentValue,
        }}
      >
        <div
          style={{ width: 100, height: 100, background: backgroundColor }}
        ></div>
      </div>
    </article>
  );
};
