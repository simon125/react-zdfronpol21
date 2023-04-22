import React, { useState } from "react";

/**
 * Stan komponentu
 *
 * - destrukturyzacja - przypomnienie
 * - hooki
 * - funkcja useState - state i setState
 * - co w tym stanie mozna trzymać?
 * - tylko jeden stan? - jednokrotne vs wielokrotne użycie hooka useState
 * - funkcja setState synchroniczna czy asnychroniczna?
 * - computed state!!!
 *
 * przykład z setTimeout
 */

export const StanKomponentu = () => {
  const [number1] = useState(10);
  const [number2] = useState(15);

  /**
   * Computed state
   *
   * sum jest przykładem comuted statu tzn takiego stanu który został
   * wygenerowany/obliczony na podstawie istniejących stanów
   */

  const sum = number1 + number2;

  return (
    <article>
      StanKomponentu
      <p>
        Wynik dodawania liczby {number1} i {number2} równa się: {sum}
      </p>
    </article>
  );
};
