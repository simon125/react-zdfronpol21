import React from "react";

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
  return (
    <article>
      <p>Are you cat or dog person?</p>
      <div>
        <label>
          <input type="radio" name="dogOrCat" />
          Dog
        </label>
      </div>
      <img width="300" alt="dog" />
    </article>
  );
};
