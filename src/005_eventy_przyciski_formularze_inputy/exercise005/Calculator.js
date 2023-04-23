import React, { useState } from "react";

/**
 * Twoim zadaniem jest stworzenie aplikacji typu kalkulator na podstawie designu z pliku desing.png
 * User jest w stanie wpisać dwie liczby w dwa inputy, może również określić działanie matematyczne
 * jakie ma być wykonane na tych dwóch liczbach
 *
 * do wpisania liczb użyj zwykłych inputów tekstowych natomiast do wyboru
 * działania matematycznego możesz użyć selecta z optionami - pamiętaj żeby każdy option oprócz labelki
 * miał również określoną wartość (atrybut value)
 *
 * do powyższych rzeczy (liczba1, liczba2, działanie matematyczne) będziesz potrzebować stanu lub kilku stanów😉 (useState)
 * wynik działania natomiast będzie tzw computed value - będzie budowana przy każdym rerenderze na nowo
 * na podstawie 3 w/w stanów pamiętaj user może chieć dodać, odjąć, podzielić lub pomnożyć wpisane liczby.
 *
 * do logiki (obliczenia) i zwrócenia wyniki obliczenia mozesz użyć tworząc dodatkowa funkcje wewnątrz lub na zewnątrz komponentu
 *
 * rezultat obliczeń możesz wyświetlać w inpucie readOnly lub w zwykły div-ie
 *
 * UWAGA wartości z inputów e.target.value są typu string, przy wykonywani obliczeń musisz zamienić liczbo-stirgni (string) na liczby (number)
 */

export const Calculator = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState("");

  // szkielet funkcji do obliczenia wyniku na podstawie dwóch liczb z inputów
  const getResult = (n1, n2, op) => {
    if (op === "+") {
      return Number(n1) + Number(n2);
    }

    if (op === "-") {
      return n1 - n2;
    }

    if (op === "*") {
      return n1 * n2;
    }

    if (op === "/") {
      return n1 / n2;
    }

    return "";
  };

  //   użyj zmienej result do wyświetlenia wyniku
  const result = getResult(number1, number2, operation);

  const handleChange = (event) => {
    setNumber1(event.target.value);
  };

  return (
    <article>
      <p>Calculator</p>
      <div style={{ display: "flex", gap: 20 }}>
        <input type="text" value={number1} onChange={handleChange} />
        <select
          name=""
          id=""
          value={operation}
          onChange={(event) => {
            setOperation(event.target.value);
          }}
        >
          <option value="" hidden>
            Wybierz działanie
          </option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="text"
          value={number2}
          onChange={(event) => {
            setNumber2(event.target.value);
          }}
        />
        <input type="text" readOnly value={result} />
      </div>
    </article>
  );
};
