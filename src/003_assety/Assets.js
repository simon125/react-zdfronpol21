import React from "react";

import zdjecieKotka from "./cat.jpg";

/**
 * - obrazki trzymane lokalnie
 * - URL do assetu
 */

export const Assets = () => {
  const cat = {
    name: "Fluffy",
    img: "//upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/220px-Cat_November_2010-1a.jpg",
  };

  return (
    <article>
      Assets
      <img
        style={{ border: "3px solid red" }}
        width={100}
        src={zdjecieKotka}
        alt="cat"
      />
      <p>{cat.name}</p>
      <img src={cat.img} />
      <img
        src="//upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/220px-Cat_November_2010-1a.jpg"
        alt=""
      />
    </article>
  );
};
