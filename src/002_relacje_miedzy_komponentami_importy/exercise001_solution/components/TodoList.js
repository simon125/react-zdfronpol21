import React from "react";
import commonClasses from "./Common.module.css";

import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  return (
    <div className={commonClasses.container}>
      <p className={commonClasses.text}>TodoList.js</p>
      <div>
        <TodoListItem />
        <TodoListItem />
        <TodoListItem />
      </div>
    </div>
  );
};
