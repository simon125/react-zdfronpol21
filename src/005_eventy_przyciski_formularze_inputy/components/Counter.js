import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [customCounter, setCustomCounter] = useState("");

  return (
    <div style={{ padding: 20, marginBottom: 10, background: "#eee" }}>
      <p>Counter</p>

      <p>Counter value: {counter}</p>
      <button
        onClick={() => {
          const newCounter = counter + 1;
          setCounter(newCounter);
        }}
      >
        +1
      </button>

      <button
        onClick={() => {
          setCounter((prevCounter) => prevCounter + 5);
        }}
      >
        +5
      </button>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          /**
           * - odczytać wartość z inputu
           * - zapisać wartość z inputu do stanu counter
           */
          setCounter(Number(customCounter));
          setCustomCounter("");
        }}
      >
        <input
          value={customCounter}
          onChange={(event) => {
            setCustomCounter(event.target.value);
          }}
          type="text"
          placeholder="Enter new value for counter"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
