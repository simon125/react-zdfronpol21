import React from "react";

/**
 * Stylowanie komponentu za pomocą atrubytu/propa style - inline styles
 *
 */

const objectWithStylesExternal = {
  backgroundColor: "pink",
};

export const StyleInline = () => {
  const id = "jakis string";

  const objectWithStyles = {
    backgroundColor: "pink",
  };

  return (
    <article
      id={id}
      style={{
        color: "red",
        textAlign: "center",
        marginTop: "100px",
        paddingBottom: 100,
        border: "2px solid green",
      }}
    >
      StyleInline
      <div style={objectWithStylesExternal}>Lorem ipsum dolor sit amet.</div>
    </article>
  );
};
