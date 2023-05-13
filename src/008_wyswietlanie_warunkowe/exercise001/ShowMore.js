import React, { useState } from "react";

/**
 * Twoim zadaniem jest stworzenie logiki która sprawi że po przyciśnieciu
 * przycisku "read more" pojawi się tag z większa ilością treści - tak jakby ciąg dalszy artykułu
 *
 * jeżeli user kliknie przycik "read less" wyświetl paragraf z mniejszą iloscią tekstu
 *
 * działanie komponentu jest zobrazowane na designach (desgin1.png, degigin2.png)
 *
 * do zadania będziesz potrzebować stanu
 *
 * spróbuj użyć ternery operatora
 */

export const ShowMore = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <article>
      <h2>Super wpis na blogu</h2>

      {showMore ? (
        <p>
          Lorem ipsum dolor sit amet. Consectetur adipisicing elit. Voluptates
          dolor velit expedita. Sapiente exercitationem sed illo fugit omnis
          quae quia, praesentium nihil neque, ex facere.
        </p>
      ) : (
        <p>Lorem ipsum dolor sit amet.</p>
      )}

      <button
        onClick={() => {
          setShowMore((prevState) => !prevState);
        }}
        style={{ width: "fit-content" }}
      >
        {showMore ? "Read less" : "Read More"}
      </button>
    </article>
  );
};
