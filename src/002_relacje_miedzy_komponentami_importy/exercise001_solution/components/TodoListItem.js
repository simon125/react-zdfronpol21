import React from "react";
import commonClasses from "./Common.module.css";
import classes from "./TodoListItem.module.css";

export const TodoListItem = () => {
  return (
    <div className={`${commonClasses.childComponent} ${classes.listItem}`}>
      TodoListItem.js
    </div>
  );
};
