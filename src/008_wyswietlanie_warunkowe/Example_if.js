import React, { useState } from "react";

export const WyswietlanieWarunkowe = () => {
  const [isChecked, setIsChecked] = useState(false);

  // UWAGA wyrazeani mogą być bardziej złożone niż pojedyńcze true &&
  // const finalResult = wyrazenie1 || wyrazenie2 && wyrazenie3 || wurazenie4 ...;
  // if(isChecked === true){
  if (isChecked) {
    return (
      <div>
        odblokowałem się
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked((prevState) => !prevState);
          }}
        />
      </div>
    );
  }

  const age = 23;

  const resultToDisplay = age > 18 ? "user pelnoletni" : "user nie pelnoletni";

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
    </article>
  );
};
