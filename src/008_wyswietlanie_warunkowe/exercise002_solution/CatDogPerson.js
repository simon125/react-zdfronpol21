import React, { useState } from "react";
import dog from "./assets/dog.jpg";
import cat from "./assets/cat.webp";
import both from "./assets/both.jpeg";

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
  const [yourChoice, setYourChoice] = useState("");

  const handleChange = (e) => {
    setYourChoice(e.target.value);
  };

  return (
    <article>
      <p>Are you cat or dog person?</p>
      <div>
        <label>
          <input
            checked={yourChoice === "dog"}
            type="radio"
            name="dogOrCat"
            value="dog"
            onChange={handleChange}
          />
          Dog
        </label>
        <label>
          <input
            checked={yourChoice === "cat"}
            type="radio"
            name="dogOrCat"
            value="cat"
            onChange={handleChange}
          />
          Cat
        </label>
        <label>
          <input
            checked={yourChoice === "both"}
            type="radio"
            name="dogOrCat"
            value="both"
            onChange={handleChange}
          />
          Both
        </label>
      </div>
      {yourChoice === "dog" && <img width="300" src={dog} alt="dog" />}
      {yourChoice === "cat" && <img width="300" src={cat} alt="cat" />}
      {yourChoice === "both" && <img width="300" src={both} alt="both" />}
    </article>
  );
};
