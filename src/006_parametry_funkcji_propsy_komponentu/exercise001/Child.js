import React from "react";

export const Child = (props) => {
  const { name, lastName } = props;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Last Name: {lastName}</p>
    </div>
  );
};
