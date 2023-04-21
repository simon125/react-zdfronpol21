import React from "react";

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
      <Heading />
      <SubHeading />
      <SubHeading />
      <SubHeading />
      <SubHeading />
      <SubHeading />
      <Table />
      <Table />
      <Table />
    </article>
  );
};
