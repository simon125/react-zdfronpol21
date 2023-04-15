import React, { useState } from "react";

/**
 *
 */

export const TextField = () => {
  const [phrase, setPhrase] = useState("");
  return (
    <article>
      <p>TextField</p>
      <input
        type="text"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
      />
      <p>{phrase}</p>
    </article>
  );
};
