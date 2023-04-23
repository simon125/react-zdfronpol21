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

const ComponentWithButton = (props) => {
  console.log(props);
  return (
    <div>
      <button onClick={props.test}>Click me</button>
    </div>
  );
};

export const Props = () => {
  const [counter, setCounter] = useState(10);

  const incrementCounter = () => {
    console.log("You cliked me");
    setCounter(counter + 1);
  };

  return (
    <article>
      Example
      {counter}
      <ComponentWithButton testowyString="test123" test={incrementCounter} />
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
