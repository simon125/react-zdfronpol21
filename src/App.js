import React, { useState } from "react";
import { Form } from "./components/Form";
import { Home } from "./components/Home";
import { List } from "./components/List";

/**
 * https://reactrouter.com/en/main/start/tutorial
 */

/**
 * MPA vs SPA jak to się robiło w stronach budowanych tylko przy pomocy HTML-a
 */

/**
 * Wprowadzenie do routingu oraz biblioteki react-router-dom
 */

/**
 * Punkty przedstawiające typowy setup oraz użycie biblioteki react-router-dom
 *
 * 1) instalaja biblioteki npm i react-router-dom
 * 2) użycie komponentu providera <BrowserRouter></BrowserRouter> w pliku index.js
 * 3) utworzenie tzw routów w pliku App.js za pomocą komponentu Routes oraz Route - komponenty pochodzą z biblioteki
 */

const style = {
  margin: 20,
  padding: 20,
  border: "2px solid blue",
  display: "flex",
  borderRadius: 5,
  gap: 50,
};

function App() {
  const [navigationState, setNavigationState] = useState("home");

  const handleChange = (e) => {
    setNavigationState(e.target.value);
  };

  return (
    <div className="container">
      <article>
        <div style={style}>
          <label>
            <input
              checked={navigationState === "home"}
              value="home"
              type="radio"
              name="nav"
              onChange={handleChange}
            />
            Home
          </label>
          <label>
            <input
              checked={navigationState === "form"}
              value="form"
              type="radio"
              name="nav"
              onChange={handleChange}
            />
            Form
          </label>
          <label>
            <input
              checked={navigationState === "list"}
              value="list"
              type="radio"
              name="nav"
              onChange={handleChange}
            />
            List
          </label>
        </div>

        <div style={{ margin: 20, marginTop: 50 }}>
          {navigationState === "home" && <Home />}
          {navigationState === "form" && <Form />}
          {navigationState === "list" && <List />}
        </div>
      </article>
    </div>
  );
}

export default App;
