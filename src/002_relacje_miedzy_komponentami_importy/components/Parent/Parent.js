import React from "react";
import { Child } from "../Child/Child";

export const Parent = () => {
  return (
    <div style={{ padding: 10, background: "yellow", margin: 20 }}>
      Parent.js
      <Child />
      <Child />
      <Child />
    </div>
  );
};
