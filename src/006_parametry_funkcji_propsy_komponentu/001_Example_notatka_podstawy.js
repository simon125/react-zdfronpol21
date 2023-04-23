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
  return <div>Suma dwóch liczb: {props.number1 + props.number2}</div>;
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
      {/* 
        atrybuty powyżej są opakowane w obiekt

        const props = {
          number1,
          number2
        }
        
      */}
      <ComponentWithProps number1={20} number2={10} />
      <ComponentWithProps number1={100} number2={num} />
      <ComponentWithProps number1={getResult()} number2={65 + 120 + 100} />
    </article>
  );
};

const addTwoNumbers = (a, b) => a + b;

addTwoNumbers(10, 20);

addTwoNumbers(40, 10);
