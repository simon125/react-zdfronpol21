import React, { useState } from "react";

/**
 * Twoim zadaniem jest na podstawie designu stowrznie inputu który będzie kontrolowany propem value
 * przez stan (useState) - czyli jaka wartosć w stanie to to będzie wyświetlone w inpucie
 *
 * niech user ma możliwość zmiany wartości w inpucie tzn po wpisaniu jakiejś treści do inputu
 * niech stan komponentu również się zaktualizuje - żeby to zereazlizować musisz obsłużyć event onChange
 * na onChangu na podstawie obiektu event musisz każdorazowo aktualizować stan za pomocą funkcji setującej (drugi element w zwracanej przes useState tablicy)
 *
 * dodatkowo wartość wpisywana powinna być wyświetlana na bierząca pod inputem (patrz design), odświeżanie ma
 * następywać przy każdym wciśnieciu klawiatury
 */

export const TextField = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <article>
      <p>TextField</p>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <p>Wartość z inputu: {inputValue}</p>
    </article>
  );
};
