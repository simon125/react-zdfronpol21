import React from "react";

export const ListyTabele = () => {
  const tablicaStringow = ["test1", "test2", "test3", "trelemoele"];

  return (
    <article>
      <p>ListyTabele</p>
      <ul>
        {/*
            WYNIK DZIAŁANIA  tablicaStringow.map
            [<li>test1</li>, <li>test2</li>, <li>test3</li>]
        */}
        {tablicaStringow.map((phrase) => {
          return <div key={phrase}>{phrase}</div>;
        })}
      </ul>
    </article>
  );
};
