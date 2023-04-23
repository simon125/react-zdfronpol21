import React from "react";
import { Child } from "./Child";
/**
 * Twoim zadaniem jest stworzenie oraz zaimportowanie komponentu Child (plik wyżej) oraz
 * wywołanie go pomiędzy tagami article
 * niech komponent <Child/> przyjmuje propsa name - wartością dla tego propsa niech będzie
 * dowolny string następnie ta wartość powinna zostać wyświetlona w komponencie Child
 */

export const Parent1 = () => {
  return (
    <article>
      Parent
      <Child name="trelemorele" />
      <Child name={"riufhewriufheriueiur"} />
      <Child />
    </article>
  );
};
