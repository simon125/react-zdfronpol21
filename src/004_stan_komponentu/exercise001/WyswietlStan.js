import React from "react";

/**
 * Twoim zadaniem jest odwzorowanie designu dostępnego w pliku desing.png
 * do realizacji zadania użyj hooka useState dla dwóch stanów
 * stanu todo oraz user tak żeby potem móc go wykorzystać do umieszczenia w "HTMLu"/JSX
 * niech obiekty USER oraz TODO bedą stanem początkowym w hookach useState
 *
 * pamietaj dane jakie masz wyświetlić mają być tymi danymi które zwraca hook useState
 * (pierwszy element destrukturyzowanej tablicy)
 *
 * nie zapomnij zaimportować funckji/hooka useState
 *
 */

const USER = { name: "John", lastName: "Doe", age: 12 };

const TODO = { name: "pouczyć się JSa", priority: "High" };

export const WyswietlStan = () => {
  return (
    <article>
      <h5>Wyswietl Stan</h5>
      <h6>User:</h6>
      <p>
        Name: <b>TUTAJ BĘDZIE NAME</b>
      </p>
    </article>
  );
};
