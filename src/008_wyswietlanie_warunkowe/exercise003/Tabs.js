import React, { useState } from "react";
import { Home } from "./components/Home";
import { Form } from "./components/Form";
import { List } from "./components/List";

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
  const [selectedTab, setSelectedTab] = useState("form");

  const handleChange = (event) => {
    setSelectedTab(event.target.value);
  };

  return (
    <article>
      <div style={style}>
        <label>
          <input
            checked={selectedTab === "home"}
            onChange={handleChange}
            value="home"
            type="radio"
          />
          Home
        </label>
        <label>
          <input
            checked={selectedTab === "form"}
            onChange={handleChange}
            value="form"
            type="radio"
          />
          Form
        </label>
        <label>
          <input
            checked={selectedTab === "list"}
            onChange={handleChange}
            value="list"
            type="radio"
          />
          List
        </label>
      </div>

      <div style={{ margin: 20, marginTop: 50 }}>
        {selectedTab === "home" && <Home />}
        {selectedTab === "form" && <Form />}
        {selectedTab === "list" && <List />}
      </div>
    </article>
  );
};
