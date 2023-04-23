import React from "react";
import { useState } from "react";

/**
 *
 * Czym są propsy?
 *
 * Przypominam funkcyjny komponent reactowy to dalej FUNCKJA JAVASCRIPTOWA
 * oznacza to tyle że tak funckja (komponent) może przyjmować parametry które w nomenklaturze reacta
 * nazywają się PROPSAMI
 *
 *
 * 1) props
 * 2) string/numbers/object as a props
 * 3) boolean as props
 * 4) functions/callbacks as a props
 * 5) props drilling
 * 6) ⭐ children
 * 7) ⭐⭐ react elements as a props
 */

const ComponentWithProps = (props) => {
  const { number1 = 10, number2 = 10 } = props;

  return <div>Suma dwóch liczb: {number1 + number2}</div>;
};

export const Props = () => {
  const [num] = useState(10);

  const getResult = () => {
    /**
     * BARDZO SKOMPLIKOWANE OBLICZENIA
     */
    return 200;
  };

  return (
    <article>
      Example
      <ComponentWithProps number1={1} number2={2} />
      <ComponentWithProps number1={getResult()} />
      <ComponentWithProps />
    </article>
  );
};

/**
 * 1) paramtry defaultowe
 */
// const addTwoNumbers = (a = 10, b = 10) => a + b;

/**
 * 2) logiczne
 */
const addTwoNumbers = (a, b) => (a || 10) + (b || 10);

addTwoNumbers(10, 20);

addTwoNumbers(40, 10);

addTwoNumbers(40); // 50

addTwoNumbers(); // 20
