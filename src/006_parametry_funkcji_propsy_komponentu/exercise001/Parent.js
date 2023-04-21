import React from "react";
import { Child } from "./Child";

/**
 * Twoim zadaniem jest stworzenie oraz zaimportowanie komponentu Child (plik wyżej) oraz
 * wywołanie go pomiędzy tagami article
 * niech komponent <Child/> przyjmuje propsa name - wartością dla tego propsa niech będzie
 * dowolny string
 */

export const TwoStrings = () => {
  return (
    <article>
      Two strings as in props
      <Child name="John" lastName="Doe" />
    </article>
  );
};
