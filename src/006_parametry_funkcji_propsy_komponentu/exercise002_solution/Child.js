import React from "react";

/**
 * Niech głównym/nadrzędnym elementem komponentu Child będzie
 * element <li></li>
 *
 * a w nim wyświetlenie wartości pochodzących z propsów
 * czyli label i value (kolejność jest istotna)
 *
 * niech value będzie umieszczone pomiędzy tagi <b></b>
 *
 *
 *
 * hint:
 * props.label
 * props.value
 *
 */

export const Child = (props) => {
  return (
    <li>
      {props.label}: <b>{props.value}</b>
    </li>
  );
};
