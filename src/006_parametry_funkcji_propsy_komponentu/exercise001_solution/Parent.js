import React from "react";
import { Child } from "./Child";

/**
 * Twoim zadaniem jest zaimportowanie komponentu Child oraz
 * wywołanie go pomiędzy tagami article
 * niech komponent <Child/> przyjmuje propsa name - wartością dla tego propsa niech będzie
 * dowolny string
 */

export const Parent1 = () => {
  return (
    <article>
      <Child name="Cześć" />
    </article>
  );
};
