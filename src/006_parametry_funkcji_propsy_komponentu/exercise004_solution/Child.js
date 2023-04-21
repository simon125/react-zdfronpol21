import React from "react";
import { GrandChild } from "./GrandChild";

export const Child = (props) => {
  return (
    <div style={{ margin: 10, padding: 10, border: "1px solid green" }}>
      <p>Child</p>
      <GrandChild name={props.name} age={props.age} sayHello={props.sayHello} />
    </div>
  );
};
