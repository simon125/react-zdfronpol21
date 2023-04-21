import React from "react";
import { Child } from "./Child";

export const Parent = (props) => {
  return (
    <div style={{ margin: 10, padding: 10, border: "1px solid blue" }}>
      <p>Parent</p>
      <Child name={props.name} age={props.age} sayHello={props.sayHello} />
    </div>
  );
};
