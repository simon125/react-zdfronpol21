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
 *
 * możliwe wartości dla selecta to kolejno: high medium low
 */

export const TodoForm = () => {
  const [title, setTitle] = useState("");

  const [tasks, setTasks] = useState(["Poczuyc się JSa"]);

  return (
    <article>
      <p>Form</p>
      <form
        onSubmit={(event) => {
          event.preventDefault(); // wyłączenie odświeżania
          const wartośćZInputa = title;

          /**
           * podejście 1 - setowanie stanu za pomocą bezpośrednio podanej wartości
           */
          const newTasks = [...tasks, wartośćZInputa];
          setTasks(newTasks);
          /**
           * podejście 2 - setowanie stanu za pomocą przekazanej funckji aktualizującej stan
           * TA FUNCKJA ZAWSZE MUSI ZWRACAĆ (NOWY) STAN
           * NOWY STAN = STARE WARTOŚCI + NOWA WARTOSC
           */
          setTasks((prevState) => [...prevState, wartośćZInputa]);
        }}
      >
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          type="text"
          placeholder="Enter title..."
        />

        <button type="submit">Submit</button>
      </form>

      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </article>
  );
};
