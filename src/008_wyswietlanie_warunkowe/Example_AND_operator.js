import React, { useState } from "react";

export const WyswietlanieWarunkowe = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <article>
      <p>Wyswietlanie warunkowe:</p>
      <ul>
        <li>&& ||</li>
        <li>Ternary</li>
        <li>if</li>
      </ul>

      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          setIsChecked((prevState) => !prevState);
        }}
      />

      {isChecked && <p>Lorem ipsum dolor sit amet.</p>}
    </article>
  );
};
