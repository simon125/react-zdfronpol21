import React from "react";

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

const user = { name: "john", lastName: "Doe" };

console.log(user.name);
console.log(user.lastName);

const { lastName, name } = user;

const tablicaStringow = ["string1", "string2", () => console.log(123)];

/**
 * DUZO KODU
 */

// tablicaStringow[0];

// tablicaStringow[1];

// tablicaStringow[2]();

const [temp, cokolwiek, test123] = tablicaStringow;

// test123();

// console.log(test123);

const myFunction = () => {
  const tablica = ["string1", "string2", () => console.log(123)];

  return tablica;
};

const zwroconaTablica = myFunction();

const [str1, str2, fun] = zwroconaTablica;

export const StanKomponentu = () => {
  return <article>StanKomponentu </article>;
};
