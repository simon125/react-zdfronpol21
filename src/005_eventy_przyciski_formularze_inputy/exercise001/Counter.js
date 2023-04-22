import React, { useState } from "react";

/**
 * Twoim zadaniem jest stworznie bardziej złozonej aplikacji typu Counter
 * która orpócz podstawowej funkcjonalności czyli dodawania i odejmowania 1 do stanu
 * powinna mieć możliwość dodać i odjąć liczbę 5
 * za pomocą doadkowych buttonów (patrz design.png)
 */

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <article>
      <p>Counter v2</p>
      <button onClick={() => setCounter(counter + 5)}>+5</button>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <input value={counter} type="text" readOnly />
      <button onClick={() => setCounter(counter - 1)}>-1</button>
      <button onClick={() => setCounter(counter - 5)}>-5</button>
    </article>
  );
};
