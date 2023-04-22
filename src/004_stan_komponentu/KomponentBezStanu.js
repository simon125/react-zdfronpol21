import React from "react";

/**
 * Bez stanu? Bez sensu? Nie koniecznie!
 */

export const KomponentBezStanu = () => {
  /**
   * Zmienne jako stan??
   */
  let number = 5;
  let text = "cześć";

  setTimeout(() => {
    number += 1;
  }, 1000);

  return (
    <article>
      <p>KomponentBezStanu</p>
      zmienna trzymająca "stan": {number}
    </article>
  );
};
