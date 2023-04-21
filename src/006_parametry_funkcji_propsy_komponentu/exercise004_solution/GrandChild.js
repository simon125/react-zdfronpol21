import React from "react";

export const GrandChild = (props) => {
  return (
    <div style={{ margin: 10, padding: 10, border: "1px solid red" }}>
      <p>GrandChild</p>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>

      <button onClick={props.sayHello}>Say Hello</button>
    </div>
  );
};
