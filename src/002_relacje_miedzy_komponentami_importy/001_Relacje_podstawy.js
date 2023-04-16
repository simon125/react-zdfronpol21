import React from "react";

/**
 * - relacje miedzy komponentami parent-child, siblings
 * - importy & exporty plików/komponentów
 * - named export  vs  default export
 * - odwzorowanie designu relacje.png
 */

/**
 * Komponent TO FUNCKJA JSowa
 * która zwraca JSXa "html-a"
 */
const Heading = () => {
  return <h2>Uczymy się Reacta</h2>;
};

export const Relacje = () => {
  /**
   * Klasycznie funckje w JS wywołujemy tak jak poniżej
   * UWAGA TAK NIE WYWOŁUJEMY TYLKO NA POTRZEBY DEMONSTRACYJNE ŻE TO NADAL JEST FUNCJA
   */
  // Heading();

  /**
   * ALE
   */

  /**
   * W reacie funkcje czyli komponenty wywołujemy tak jak
   * elemnty htmlowe (jednotagowe - ps. są wyjątki)
   *
   * <Heading /> patrz niżej
   */

  return (
    <article>
      Relacje
      <Heading />
    </article>
  );
};
