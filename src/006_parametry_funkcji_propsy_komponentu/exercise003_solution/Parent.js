import React, { useState } from "react";
import { Output } from "./Output";
import { IncreaseButton } from "./IncreaseButton";
import { DecreaseButton } from "./DecreaseButton";

/**
 * Twoim zadaniem jest stworznie apki typu counter na podstawie deisgnu (design.png)
 * tym razem aplikacja powinna składać się z więcej niż jednego komponentu - każdy
 * będzie posiadał swoje dedykowane zadanie
 *
 * komponent Output w pliku Output.js powinien przyjmować propsa o dowolnej nazwie wartością tego propsa
 * powinnna być wartoś countera - komponent Ouput powinien wyświetlać przekazana wartos
 *
 * komponent IncreaseButton w pliku IncreaseButton.js powinien przyjmować funkcje jako props (nazwa dowolna)
 * przekazana funkcja powinna byc wywoływana w momencie kliknięcia (onClick) przycisku w komponencie
 * IncreseButton - funkcja ta powinna aktualizować wartość counera dodając wartość 1 do poprzeniej warośći
 *
 * Komponent DecreaseButton - opjs taki jak wyżej z tą różnica że po przyciśniećiu przycisku wartość
 * countera powinna być pomniejszana o 1
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
