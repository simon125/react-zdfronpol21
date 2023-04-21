import React, { useState } from "react";

export const SimpleTodoList = () => {
  const [tasks] = useState([
    "Pouczyć się TSa",
    "Pouczyć się JSa",
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
