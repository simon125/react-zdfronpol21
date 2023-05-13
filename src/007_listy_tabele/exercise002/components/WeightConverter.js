import { useState } from "react";
import { Form } from "./Form";
import { Output } from "./Output";

export const WeightConverter = () => {
  const [value, setValue] = useState("");

  return (
    <div style={{ margin: 10, padding: 20, border: "2px solid gray" }}>
      Weight converter
      <Form wartoscInputa={value} funkcjaSetujaca={setValue} />
      <Output value={value * 0.123} bgColor={"blue"} />
      <Output value={value * 0.432} bgColor={"green"} />
      <Output value={value * 1.5} bgColor={"red"} />
    </div>
  );
};
