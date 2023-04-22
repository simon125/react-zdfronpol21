import React, { useState } from "react";
import { Counter } from "./components/Counter";

/**
 * Eventy na przykładzie
 * - buttonów
 * - inputów
 * - formularz (submit)
 *
 * aktualizacja stanu
 * wyświetlanie nowego stanu
 *
 * event handlery różne podejscia
 *
 * Przykłady
 * counter
 * text field z wyświetlaniem aktualnej wartości
 * submit formularza | jeden input | wyświetlenie tbalicy stringów
 */

// const button = document.getElementById("button");

// button.addEventListener("click", (event) => {});

export const Eventy = () => {
  const [state, set] = useState([]);
  const [textInputValue, setTextInputValue] = useState("hello");

  const [textInputValue2, setTextInputValue2] = useState("");

  const [label, setLabel] = useState("Click me");

  return (
    <article>
      <p>Events</p>

      <Counter />

      <input
        type="text"
        value={textInputValue}
        onChange={(event) => {
          console.log("wywoluje się");
          console.log(event.target.value);
          setTextInputValue(event.target.value);
        }}
      />

      <h2>{textInputValue.split("").join("@")}</h2>

      {/* 
      na sztywno przypisany string - brak kontroli - brak możliwości odczytu wartosci
      user nie moze nic wpisywać
      */}
      {/* <input value={"zwykly string trelmorele"} /> */}

      <input
        value={textInputValue2}
        onChange={(event) => {
          // event - jest to obiekt który zawsze jest jako parametr w funkcji którą przypiszemy do eventu
          // event - jest to obiekt reprezentujący to co się stało w przeglądarce jakiś "event"
          // event.target - jest obiekt reprezentujacy element na którym wystąpił dany event np event "change" zaszedł na inpucie (event.target)
          // event.target.value - jest to wartość która jest w inpucie (text wpisany w chwili zmiany)
          // event.target.value - może nam posłużyć do aktualizacji stanu (useState)
          setTextInputValue2(event.target.value);
        }}
      />
      <button
        className="trelemorele"
        id="uniqueId"
        name=""
        onClick={() => {
          setLabel("You clicked me");
        }}
      >
        {label}
      </button>
      {state.join(", ")}
    </article>
  );
};
