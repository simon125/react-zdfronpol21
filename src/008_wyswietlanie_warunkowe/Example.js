import React, { useState } from "react";

const Component1 = () => {
  return <div>Component 1</div>;
};

const Component2 = () => {
  return <div>Component 2</div>;
};

const Component3 = () => {
  return <div>Component 3</div>;
};

export const WyswietlanieWarunkowe = () => {
  const [komponentDoWyswietlenia, setCmp] = useState("");

  return (
    <article>
      <select
        value={komponentDoWyswietlenia}
        onChange={(event) => setCmp(event.target.value)}
      >
        <option value="" hidden>
          Wybierz komponent
        </option>
        <option value="cmp1">Component 1</option>
        <option value="cmp2">Component 2</option>
        <option value="cmp3">Component 3</option>
      </select>

      {komponentDoWyswietlenia === "cmp1" && <Component1 />}
      {komponentDoWyswietlenia === "cmp2" && <Component2 />}
      {komponentDoWyswietlenia === "cmp3" && <Component3 />}
    </article>
  );
};
