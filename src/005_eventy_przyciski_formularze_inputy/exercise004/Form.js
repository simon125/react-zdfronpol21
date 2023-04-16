import React, { useState } from "react";

/**
 * Twoim zadaniem jest stworzenie formularza na podstawie dostępnego designu
 * formularz powinien składać się z dwóch inputów
 * jeden textowy do wpisania tytułu zadania
 * a drugi typu select (zwykły select) do wyboru priorytetu zadania
 *
 * wartości powinny być przechowywane w stanie/stanach (useState)
 *
 * user może zasubmitować wpisane wartości jednocześnie tworząc obiekt task
 * i uzupełniając stan który przechowuje tablice tasków (tablica obiektów)
 * stan odpowiedzialny za przechowywanie taskow już istnieje (patrz const [tasks, setTasks] = useState([]);)
 *
 * submit ma być wywoływany na przyciśniecie przycisku submit albo przycisnięcie przyciksu enter
 * będąc sfocusowanym na dowolnym inpucie w obrębie formularza - (użycie eventu submit)
 *
 * dodatkowo w momencie submitu inputy (input i selcet) powinny mieć resetowane/czyszczone wartości tak
 * żeby user mógł wprowadzić nowe dane
 *
 * hints:
 * - pamiętaj o wyłączeniu defaultowego zachowania formularza
 */

export const TodoForm = () => {
  /**
   * Możesz usunąć/dostosować zmienną tasks na swoje potrzeby
   */
  const tasks = [
    { name: "John", lastName: "Doe" },
    { name: "Jane", lastName: "Doe" },
  ];

  return (
    <article>
      <p>Form</p>

      <div>{JSON.stringify(tasks)}</div>
    </article>
  );
};
