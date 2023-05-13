import React from "react";
import { Home } from "./components/Home";

/**
 * Twoim zadaniem jest napisanie komponentu wyświetlającego warunkowo
 * komponenty dzieci (Home, Form, List - komponenty są dostępne w folderze components pamiętaj o ich zaimportowaniu)
 * komponenty te będą wyświeltane w zależności od stanu który będzie kontrolowany
 * przez radio buttony które musisz obsłużyć
 *
 * komponent ten będzie symulował navigacje w aplikacji
 *
 * działanie aplikacji obrazują designy w folderze design
 *
 *
 */

const style = {
  margin: 20,
  padding: 20,
  border: "2px solid blue",
  display: "flex",
  borderRadius: 5,
  gap: 50,
};

export const Tabs = () => {
  return (
    <article>
      <div style={style}>
        <label>
          <input value="home" type="radio" />
          Home
        </label>
      </div>

      <div style={{ margin: 20, marginTop: 50 }}>
        <Home />
      </div>
    </article>
  );
};
