import React, { useState } from "react";

import DOG_IMG from "./assets/dog.jpg";
import CAT_IMG from "./assets/cat.webp";
import BOTH_IMG from "./assets/both.jpeg";

/**
 * Twoim zadaniem jest na podstawie designu stworzyć komponent który wyświetla warunkowo obrazek
 * w zależności od wybranej wartości w inpucie typu radio
 *
 * stwórz 3 radio buttony każda z inną wartością: cat, dog, both
 * dla wymienionych wartości wyświetlaj obrazki z folderu assets
 *
 * do przechowywania wybranej wartości potrzebujesz użyć stanu (useState)
 * pamiętaj o zaimportowaniu obrazków (nie pamiętasz jak to się robiło? skorzystaj z modułu 003_assety)
 *
 *
 * ⭐⭐ jeżeli user wybierze opcje "both" oprócz obrazka both.jpeg wyświetl wszystkie
 * obrazki razem
 *
 */

export const CatDogPerson = () => {
  const [selectedItem, setSelected] = useState("dog");

  const handleChange = (event) => {
    if (event.target.value === selectedItem) {
      setSelected("");
    } else {
      setSelected(event.target.value);
    }
  };

  return (
    <article>
      <p>Are you cat or dog person?</p>

      <div>
        <label>
          <input
            onClick={handleChange}
            checked={selectedItem === "dog"}
            value="dog"
            type="radio"
            name="dogOrCat"
          />
          Dog
        </label>
        <label>
          <input
            onClick={handleChange}
            checked={selectedItem === "cat"}
            value="cat"
            type="radio"
            name="dogOrCat"
          />
          Cat
        </label>
        <label>
          <input
            onClick={handleChange}
            checked={selectedItem === "both"}
            value="both"
            type="radio"
            name="dogOrCat"
          />
          Both
        </label>
      </div>
      {(selectedItem === "dog" || selectedItem === "both") && (
        <img width="300" src={DOG_IMG} alt="dog" />
      )}
      {(selectedItem === "cat" || selectedItem === "both") && (
        <img width="300" src={CAT_IMG} alt="cat" />
      )}
      {selectedItem === "both" && (
        <img width="300" src={BOTH_IMG} alt="cat&dog" />
      )}
    </article>
  );
};
