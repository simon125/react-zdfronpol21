import React from "react";

/**
 * Komponent funkcyjny - od wersji Reacta 16.8 stanowią podstawowy budulec aplikacji reactowych
 * i głównie one są wykorzystywane w projektach (prawie - aplikacje które są pisane w reakcie w wersji <16.8 niestety pisze się inaczej)
 *
 * React jest tylko biblioteką i dalej piszemy w JavaScripcie
 *
 * !!! Funkcyjny komponent reactowy to dalej funkcja JavaScriptowa !!!
 *
 * React wraz z paroma innymi narzędziami dodaje dodatkowe możliwości do tych funkcji
 * przez co pisanie aplikacji frontendowych jest usystematyzowane, względnie łatwiejsze i po poznaniu biblioteki szybsze
 *
 */

/**
 * Przykład
 * - syntax reacta
 * - pisanie JSX - czym jest JSX i co jest pod spodem? Babel - chodzi o tą biblijną wieże?
 * - dalsze pisanie HTMLa tzn JSXa - na przykładzie różnych tagów
 * - umieszczanie zmiennych, obiektów, tablic w komponencie
 * - funkcje wewnątrz komponentu (funkcji)
 * - funkcje na zewnątrz komponentu (funkcji) - na przykładzie addTwoNumbers
 * - atrybuty/propy
 * - komentarze w JSX a w JS
 */

/**
 * Funkcja zewnętrzna poza kompoentem
 */
function multiplyTwoNumbers(a, b) {
  return a * b;
}

export const KomponentFunkcyjny = () => {
  /**
   * Funkcja wewnętrzna w środku komponentu
   */
  const addTwoNumbers = (a, b) => {
    return a + b;
  };

  const div = <div>cześć to ja div</div>;

  const przykladowaZmienna = "jakis string";

  const user = {
    name: "Jane",
    age: 20,
  };

  const tablicaNumberów = [1, 2, 3, 4, 5];
  const tablicaStringów = ["string1", "string2", "string3"];
  const wynikMnożenia = multiplyTwoNumbers(3, 10);

  return (
    <article>
      {/* div jest zmiennątryzmająca JSX - można wyświetlić */}
      {div}
      {/* przykladowaZmienna jest prymitywem - można wyświetlać */}
      <div>{przykladowaZmienna}</div>

      {/* user jest obiektem dlatego nie możemy go wyświetlić */}
      {/* {user}  */}
      {/* tablice prymitywów też możemy wyświetlać bezpośrednio */}
      <div>{tablicaNumberów}</div>
      <div>{tablicaStringów}</div>

      <ul>
        <li>
          Name: <b>{user.name}</b>
        </li>
        <li>
          Age: <b>{user.age}</b>
        </li>
      </ul>

      <div>
        <p>Wynik dodawania 5 + 10 = {addTwoNumbers(5, 10)}</p>
        <p>Wynik mnożenia {wynikMnożenia}</p>
      </div>

      <input
        type="text"
        placeholder="Enter some text.."
        value="trelemorele"
        id="testID"
        name="name"
        className={przykladowaZmienna}
      />
    </article>
  );
};

/**
 * Komponent przed "przetłumaczeniem" przez paczke babel js
 */
const SomeComponent1 = () => {
  return (
    <div>
      <button>Click me</button>
    </div>
  );
};

/**
 * Ten sam Komponent po "przetłumaczeni" przez paczke babel js
 */
const SomeComponent = () => {
  return /*#__PURE__*/ React.createElement(
    "div",
    null,
    /*#__PURE__*/ React.createElement("button", null, "Click me")
  );
};
