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
  const [state, setState] = useState("test");

  setTimeout(() => {
    setState("trelemorele");
  }, 3000);

  return (
    <article>
      StanKomponentu
      <p>{state}</p>
    </article>
  );
};
