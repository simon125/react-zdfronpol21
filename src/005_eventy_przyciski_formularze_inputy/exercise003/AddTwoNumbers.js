import React, { useState } from "react";

/**
 *
 */

export const AddTwoNumbers = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  return (
    <article>
      <p>Add Two Numbers</p>
      <input
        type="text"
        placeholder="Enter number 1"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter number 2"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
      <p>Result: {Number(number1) + Number(number2)}</p>
    </article>
  );
};
