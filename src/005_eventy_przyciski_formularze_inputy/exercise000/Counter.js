import React, { useState } from "react";

/**
 * Twoim zadaniem jest stworzenie mini aplikacji Counter na podstawie dostępnego
 * designu (design.png)
 *
 * Counter powinien składać się z następujących elementów:
 *  - dwóch przycisków (jeden do dodawania, jeden do odejmowania)
 *  - elementu wyświetlającego aktualny wynik
 * aplikacja powinna używać hooka useState który będzie przechowywal wartosć
 * countera, funkcja setująca powinna być wywołana z odpowiednimi parametrami
 * w momencie przyciśniecia przycisków +/-
 *
 * stan początkowy (parametr funkcji useState) powinien być ustawiona na 0
 * po przyciśnieciu przycisku +1 wartość stanu powinna się zwiekszyć o 1
 * po przyciśnieciu przycisku -1 wartość stanu powinna się zmniejszyć o 1
 *
 *
 */

export const SimpleCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleDecreaseClick = () => {
    const newCounter = counter - 1;
    setCounter(newCounter);
  };

  function handleIncreaseClick() {
    setCounter(counter + 1);
  }

  return (
    <article>
      <p>Counter</p>
      {/* wersja z handlerem inlinowym */}
      {/* <button onClick={() => setCounter(counter + 1)}>+1</button> */}
      {/* wersja z handlerem zdefiniowanym wyżej */}
      <button onClick={handleIncreaseClick}>+1</button>
      <input value={counter} type="text" readOnly />
      <button onClick={handleDecreaseClick}>-1</button>
    </article>
  );
};
