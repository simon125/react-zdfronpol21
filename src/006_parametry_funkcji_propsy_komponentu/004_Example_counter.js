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

const CounterControler = (props) => {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <button onClick={props.funckjaInkrementujaca}>+1</button>
      <button onClick={props.funckjaDekrementujaca}>-1</button>
    </div>
  );
};

const CounterOutput = (props) => {
  return <p>Wartość countera: {props.output}</p>;
};

export const Props = () => {
  const [counter, setCounter] = useState(10);

  const handleDecreaseClick = () => {
    setCounter(counter - 1);
  };

  return (
    <article>
      Example
      <button onClick={() => setCounter(counter + 5)}>+5</button>
      <CounterControler
        funckjaInkrementujaca={() => setCounter(counter + 5)}
        funckjaDekrementujaca={handleDecreaseClick}
      />
      <CounterOutput output={counter} />
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
