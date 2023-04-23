import React, { useState } from "react";

/**
 * Twoim zadaniem jest stworzenie miniapki todo list na podstawie designu (desing.png)
 *
 * Żeby to osiągnąć musisz przemapować się po tablicy z zadaniami (tasks) i zwrócić
 * element li spopulowany danymi (jednym taskiem z tablicy)
 *
 * w rozwiązaniu użyj metody map
 *
 * hint: nie zapomnij o atrybucie key
 *
 *
 *
 * ⭐⭐ dla chętnych - odkomentuj zakomentowane undefindy w tablicy oraz rzeczy nie będące stringami
 * Twoim zadaniem jest uprzednie odfiltrowanie niechcianych elementów i następnie wyświetlenie tylko poprawnych danych
 *
 * ⭐⭐ stwórz komponent TodoMrtric w tym samym folderze który będzie prostym spanem wyświetlającym
 * labelke (label) oraz wartośc (value) - niech ten komponent przyjmuje dwa propsy własnie wcześniej wymienione
 * label oraz value które będą wyświetlać. Wywołaj nowostworzony komponent dwa razy wewnatrz tego komponentu
 * dane jakie mają wyświetlać te komponenty są następujące:
 * 1) label="zadania poprawne"  value={wyliczonaIloscZadanPoprawnych} // tutaj masz wyśweitlić ile było poprawnych stringów
 * 2) label="zadania nie poprawne"  value={iloscZadanOdfiltrowanych} // tutaj masz wyświetlić ile było undefindow NaN itd
 *
 */

export const SimpleTodoList = () => {
  const [tasks] = useState([
    "Pouczyć się TSa",
    // NaN,
    "Pouczyć się JSa",
    // undefined,
    "Pouczyć się CSSa",
  ]);
  return (
    <article>
      <p>SimpleTodoList</p>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </article>
  );
};
