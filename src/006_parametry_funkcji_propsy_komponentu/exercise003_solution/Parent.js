import React from "react";
import { Child } from "./Child";

/**
 *
 * Zadanie 1
 * Twoim Zadaniem jest przekazanie dwóch propsów do komponentu
 * Child - standardowo najpierw musisz stworzyć komponent Child i go zaimportować
 * niech komponent Child wyswietla przekazane propy
 * niech komponent Child będzie wywołany wewnątrze tagów <ul></ul>
 *
 * niech jednym propem będzie słowo label
 * a drugim value - następnie label i value powinny być wyświetlone w komponencie Child
 * zgodnie z designem oraz opisem w pliku Child.js
 *
 * Zadanie 2
 * Wywołaj kilkukrotnie komponent Child z różnymi propami
 * przypominam zgodnie z treścią Child powinien być elementem li
 * czyli wywołania powinny być poimędzy tagiem <ul></ul>
 *
 */

export const Parent2 = () => {
  return (
    <article>
      <ul>
        <Child label="Name" value="John" />
        <Child label="Last Name" value="Doe" />
        <Child label="Age" value="20" />
      </ul>
    </article>
  );
};
