import React, { useState } from "react";

const TASKS = [
  {
    title: "John",
    priority: "medium",
    id: "wo4jfw4fow",
  },
  {
    title: "ergerg",
    priority: "high",
    id: "t4e4t4wefef",
  },
  {
    title: "werwer",
    priority: "medium",
    id: "23f23f3",
  },
  {
    title: "feerfref",
    priority: "low",
    id: "23dafhdtgs",
  },
];

export const ListyTabele = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");

  const [tasks, setTasks] = useState(TASKS);

  return (
    <article>
      <p>ListyTabele</p>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          /**
           * 1. Zebranie wartości z inputów i stworzenie nowego obiektu task (newTask)
           */
          const newTask = {
            id: Math.random(),
            title: title,
            priority: priority,
          };

          /**
           * 2. umieścić ten nowy task w tablicy z taskami (stan - tasks)
           * 3. stworzenie nowej tablicy z zachowaniem startch elmentów i nowo stworzonym
           * obiektem newTask
           */
          const newTasks = [...tasks, newTask];

          setTasks(newTasks);

          /**
           * 4. czyszczenie inputów
           */
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
          name="priority"
          value={priority}
          onChange={(event) => {
            setPriority(event.target.value);
          }}
        >
          <option value="" hidden>
            Select priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Priority</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.priority}</td>
                <td>
                  <button
                    onClick={() => {
                      /**
                       * 1) na kliknięcie chce żeby kliknięty element się nie wyświtlał
                       * 2) tworzymy nowa tablice na podstawie starej ale bez klikniętego elemntu
                       *
                       */
                      const nowaTablicaBezKliknietegoElemtnu = tasks.filter(
                        (taskToVerify) => {
                          return taskToVerify.id !== task.id;
                        }
                      );

                      setTasks(nowaTablicaBezKliknietegoElemtnu);

                      console.log(task);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </article>
  );
};
