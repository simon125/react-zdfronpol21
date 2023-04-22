import React, { useState } from "react";

/**
 * Twoim zadaniem jest stworzenie mini kalkulatorka na podstawie designu.
 * Apka posiada dwa inputy do których będzie można wpisac liczby lub inne znaki (chyba zę zrobisz małą walidację - to dla chętnych)
 * wartości inputów muszą być przchowywane przez "dwie komórki pamięci" (nie mówiłem w taki sposób?? spotkałem się że ludzie mówią tak czasem o zmiennych lub stanie przykładowo useState)
 * czyli: 2 inputy = 2 useState-y   2 event handlery
 *
 * następnie na podstawie tych dwóch wartości wyświetlamy sumaryczną ich wartość (wyświetlamy dodane liczby) zgodnie z designem (design.png)
 *
 *
 *
 * hint: wartości z inputów event.target.value są typem string
 *
 * zadanie dla chętnych: dodaj przycisk do aplikacji ze znakiem "=" i wyświetlaj wynik dopiero po wciśnięciu przycisku
 */

export const AddTwoNumbers = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  return (
    <article>
      <p>Add Two Numbers</p>
      <input
        type="text"
        placeholder="Enter number 1"
        value={number1}
        onChange={(event) => setNumber1(event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter number 2"
        value={number2}
        onChange={(event) => setNumber2(event.target.value)}
      />
      <p>Wynik: {Number(number1) + Number(number2)}</p>
    </article>
  );
};
