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

export const Eventy = () => {
  const [state, set] = useState([]);
  const [val, setVal] = useState("");

  return (
    <article>
      <p>Events</p>

      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button
        onClick={() => {
          set((p) => [...p, val]);
          setVal("");
        }}
      >
        Click
      </button>
      {state.join(", ")}
    </article>
  );
};
