import React, { useState } from "react";

export const Numbers = () => {
  const [numbers] = useState([3, 1, 6, 5, 2, 4]);
  return (
    <article>
      <p>Numbers</p>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </article>
  );
};
