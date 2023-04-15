import React from "react";
import commonClasses from "./Common.module.css";

export const TodoForm = () => {
  return (
    <div className={commonClasses.container}>
      <p className={commonClasses.text}>TodoForm.js</p>
      <button className={commonClasses.submit}>Submit</button>
    </div>
  );
};
