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
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = { title, priority };

    setTasks((prev) => [...prev, newTask]);
    setTitle("");
    setPriority("");
  };

  return (
    <article>
      <p>Form</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          name=""
          id=""
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="" hidden>
            Select priority
          </option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Submit</button>
      </form>
      <div>{JSON.stringify(tasks)}</div>
    </article>
  );
};
