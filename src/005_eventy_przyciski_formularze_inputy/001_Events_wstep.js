import React, { useState } from "react";

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

  const [label, setLabel] = useState("Click me");

  return (
    <article>
      <p>Events</p>

      <input
        type="text"
        value={textInputValue}
        onChange={(event) => {
          console.log("wywoluje się");
          console.log(event.target.value);
          setTextInputValue(event.target.value);
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
