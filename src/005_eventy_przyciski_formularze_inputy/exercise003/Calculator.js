import React from "react";

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
  // szkielet funkcji do obliczenia wyniku na podstawie dwóch liczb z inputów
  const getResult = (/* będziesz potrzebował parametrów ??? */) => {
    return "";
  };

  //   użyj zmienej result do wyświetlenia wyniku
  const result =
    getResult(/* JEŻELI TWOJA FUNKJA PRZYJMUJE ARGUMENT MUSISZ GO TU PRZEKAZAĆ */);

  return (
    <article>
      <p>Calculator</p>

      <select name="" id="">
        <option value="" hidden>
          Wybierz działanie
        </option>
      </select>
    </article>
  );
};
