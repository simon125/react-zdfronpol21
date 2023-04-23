import React from "react";
import { Child } from "./Child";

/**
 * Twoim zadaniem jest stworzenie oraz zaimportowanie komponentu Child (plik wyżej) oraz
 * wywołanie go pomiędzy tagami article
 * niech komponent <Child/> przyjmuje 2 propsy name oraz lastName - wartosciami dla tych propsów niech beędą
 * dowolne stringi
 *
 * przekazane dane poprzez propsy należy wyświetlić w komponencie Child zgodnie z designem
 */

export const TwoStrings = () => {
  return (
    <article>
      <Child name="John" lastName="Jakis tam" />
      <Child />
      <Child />
      <Child name="trelemorele" />

      {/* <Child name="cokolwiek" lastName="Doe" /> */}
    </article>
  );
};
