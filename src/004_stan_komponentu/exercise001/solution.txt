import React, { useState } from "react";

/**
 * Twoim zadaniem jest odwzorowanie designu dostępnego w pliku desing.png
 * do realizacji zadania użyj hooka useState dla dwóch stanów
 * stanu todo oraz user tak żeby potem móc go wykorzystać do umieszczenia w "HTMLu"/JSX
 * niech obiekty USER oraz TODO bedą stanem początkowym w hookach useState
 *
 * pamietaj dane jakie masz wyświetlić mają być tymi danymi które zwraca hook useState
 * (pierwszy element destrukturyzowanej tablicy)
 *
 */

const USER = { name: "John", lastName: "Doe", age: 12 };

const TODO = { name: "pouczyć się JSa", priority: "High" };

export const WyswietlStan = () => {
  const [user] = useState(USER);
  const [todo] = useState(TODO);

  return (
    <article>
      <h5>Wyswietl Stan</h5>
      <h6>User:</h6>
      <p>
        Name: <b>{user.name}</b>
      </p>
      <p>
        Last name: <b>{user.lastName}</b>
      </p>
      <p>
        Age: <b>{user.age}</b>
      </p>

      <h6>User's task</h6>
      <p>
        Name: <b>{todo.name}</b>
      </p>
      <p>
        Priority: <b>{todo.priority}</b>
      </p>
    </article>
  );
};
