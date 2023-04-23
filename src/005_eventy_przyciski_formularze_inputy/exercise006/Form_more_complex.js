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
  const [priority, setPriority] = useState("");

  const [tasks, setTasks] = useState([]);

  return (
    <article>
      <p>Form</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          /**
           * 1) stworzyć obiekt reprezentujący task
           * 2) zaktualizować stan tablicy z taskami
           * 3) wyczyszczenie/resetowanie pól w formularzu
           *
           */
          // skrótowy sposób tworzenia obiektów
          // const newTask = {
          //   title,
          //   priority
          // }
          const newTask = {
            title: title,
            priority: priority,
          };

          // prevTasks to jest tablica obeiktów
          // setTasks((prevTasks) =>{
          //   const newTasks = [...prevTasks, newTask]

          //   return newTasks;
          // });

          // setTasks można zapisać też tak jak poniżej
          setTasks((prevTasks) => [...prevTasks, newTask]);

          setTitle("");
          setPriority("");
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
        <select
          value={priority}
          onChange={(event) => {
            setPriority(event.target.value);
          }}
        >
          <option value="" hidden>
            Wybierz priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <pre>{JSON.stringify(tasks, null, 2)}</pre>
    </article>
  );
};
