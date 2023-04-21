import React, { useState } from "react";
import { Output } from "./Output";
import { IncreaseButton } from "./IncreaseButton";
import { DecreaseButton } from "./DecreaseButton";

/**
 * Twoim zadnaniem jest wyświetlenie listy zadań w komponencie Child.js
 * lista zadań jest przechowywana w stanie useState (tasks)
 * dodatkowo każdy element listy powinnien posiadać swój przycisk do usuwania elementu
 *
 */

export const CounterWithProps = () => {
  const [counter, setCounter] = useState(0);

  return (
    <article>
      <p>Counter with props</p>
      <IncreaseButton onIncreaseClick={() => setCounter(counter + 1)} />
      <Output value={counter} />
      <DecreaseButton onDecreaseClick={() => setCounter(counter - 1)} />
    </article>
  );
};
