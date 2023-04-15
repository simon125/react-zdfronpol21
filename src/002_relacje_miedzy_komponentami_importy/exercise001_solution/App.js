import React from "react";
import classes from "./App.module.css";
import { TodoForm } from "./components/TodoForm";
import { Statistics } from "./components/Statistics";
import { TodoList } from "./components/TodoList";

/**
 * Twoim zadaniem jest odwzorowanie designu z pliku desing.png
 * jednak tym razem istotą zadania NIE jest dokładna implementacja designu a
 * stworzenie odpowiedniej struktury plików oraz poprawne ich importowanie (w praktyce będziesz mieć/miała doczynienia z wieloma plikami
 * liczonymi w w dziesiątkach a moze nawet setkach)
 *
 *
 * zauważ że na designie w każdym poszczególnym kafelku/prostokąciku jest sprecyzowana nazwa pliku (oraz komponentu)
 * stwórz na podstawie designu odpowiednią strukturę plików/komponentów - niech nowe pliki/komponenty znajdują
 * się w zbiorczym folderze components w środku tego folderu (exercise001)
 *
 * Finalnie powinieneś/powinnaś skończyć z 5 nowymi plikami JS oprócz App.js który będzie kontenerem
 * na Twoje komponenty (zgodnie z designem)
 *
 * wymagnia:
 * - niech komponenty będą wewnątrz nowo stworzonego folderu components
 * - powienieś/powinnaś stworzyć przynajmniej następujące pliki z komponetami
 *   - Metric.js
 *   - Statistics.js
 *   - TodoForm.js
 *   - TodoList.js
 *   - TodoListItem.js
 * - używaj named exportów/importów
 *
 * ⭐⭐ spróbuj zaimplementować dokładny design - w razie potrzeby skorzystaj z folderu z
 * przykładowym rozwiązaniem exercise001_solution
 *
 */

export const TodoApp = () => {
  return (
    <article className={classes.appContainer}>
      <TodoForm />
      <Statistics />
      <TodoList />
    </article>
  );
};
