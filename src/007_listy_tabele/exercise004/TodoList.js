import React, { useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      title: "Pouczyć się JSa",
      priority: "HIGH",
      status: false,
    },
    {
      id: Math.random(),
      title: "Pouczyć się CSSa",
      priority: "HIGH",
      status: true,
    },
  ]);

  return (
    <article>
      <p>TodoList</p>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Is done?</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.priority}</td>
              <td>{`${todo.status}`}</td>
              <td>
                <button style={{ width: "fit-content" }}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};
