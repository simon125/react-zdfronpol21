import React from "react";

import { Button, Button1, Button2 } from "./components/Button/Button";

/**
 * defaultowy import pozwala "przenazwić" exportowany kompoenent/zmienną/funckje/cokolwiek
 */
import Trelemorele from "./components/Button/Button"; // pod nazwą Trelemorele jest tak na prawde komponent Button
import Trelemorele1 from "./components/Input/Input"; // pod nazwą Trelemorele1 jest tak na prawde komponent Input

/**
 * - relacje miedzy komponentami parent-child, siblings
 * - importy & exporty plików/komponentów
 * - named export  vs  default export
 * - odwzorowanie designu relacje.png
 */

const Heading = () => {
  return <h2>Uczymy się Reacta</h2>;
};

function SubHeading() {
  return <h3>To Jest Subheading</h3>;
}

const Table = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>123</td>
          <td>123</td>
          <td>123</td>
        </tr>
      </tbody>
    </table>
  );
};

export const Relacje = () => {
  /**
   * KOLEJNA ZALETA KOMPONENTÓW
   * możemy wywoływać je kilkukrotnie
   */
  return (
    <article>
      Relacje
      <Button />
      <Button1 />
      <Button2 />
      {/* Trelemorele = Button */}
      <Trelemorele />
      {/* Trelemorele1 = Input */}
      <Trelemorele1 />
      <Heading />
      <SubHeading />
    </article>
  );
};
