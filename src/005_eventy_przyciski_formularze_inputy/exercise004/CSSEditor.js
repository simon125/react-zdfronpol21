import React, { useState } from "react";

/**
 *
 */

export const CSSEditor = () => {
  const [backgroundColor, setBackgroundColor] = useState("green");
  const [justifyContentValue, setJustifyContentValue] = useState("flex-start");

  return (
    <article>
      <p>CSSEditor</p>
      <select
        onChange={(e) => setBackgroundColor(e.target.value)}
        value={backgroundColor}
        name=""
        id=""
      >
        <option value="" hidden>
          Select color
        </option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
      </select>

      <label>
        <input
          onChange={(e) => setJustifyContentValue(e.target.value)}
          type="radio"
          name="flex"
          value="flex-start"
        />{" "}
        Flex-start
      </label>

      <label>
        <input
          onChange={(e) => setJustifyContentValue(e.target.value)}
          type="radio"
          name="flex"
          value="center"
        />{" "}
        Center
      </label>

      <label>
        <input
          onChange={(e) => setJustifyContentValue(e.target.value)}
          type="radio"
          name="flex"
          value="flex-end"
        />{" "}
        Flex-end
      </label>

      <b style={{ marginTop: 30, display: "block" }}>Preview</b>
      <div
        style={{
          display: "flex",
          padding: 20,
          margin: 20,
          border: "2px solid red",
          justifyContent: justifyContentValue,
        }}
      >
        <div
          style={{ width: 100, height: 100, background: backgroundColor }}
        ></div>
      </div>
    </article>
  );
};
