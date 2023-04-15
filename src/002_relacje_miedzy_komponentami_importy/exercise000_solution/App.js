import React from "react";
import { Metric1 } from "./Metric1";
import { Metric2 } from "./Metric2";
import { Metric3 } from "./Metric3";

/**
 * Twoim zadaniem jest odwzorowanie designu dostępnego w pliku design.png
 * UWAGA nie musisz implementować tych komponentów od poczatku ponieważ jeden z nich był już
 * tworzony w module 001_stylowanie_css/exercise004 - jeżeli nie masz tego pliku/komponentu
 * skorzystaj z plików solution.txt oraz solution.module.css z modułu 001_stylowanie_css/exercise004
 * musisz jednak uważać żeby nie przekopiować za dużo - jezeli korzystasz z w/w przykładowych rozwiązań
 * to trzeba usunąć z nich tag artice oraz paragraf z tytułem - w razie potrzeby od razu pytaj lub sprawdź
 * folder z rozwiazaniem tego zadania
 *
 *
 * nastepnym krokiem po przekopiowaniu tego komponentu jest stworzenie dwóch pozostałych komponentów
 * z dostosowanym kontentem do designu
 * (spoiler w module omawiającym propsy to zadanie wykonasz w jeszcze sprytniejszy sposób 😉)
 * niech pliki/komponenty nazywają się kolejno
 * Metric1.js
 * Metric2.js
 * Metric3.js
 *
 *
 * następnie zaimportuj wszystkie te komponenty i wywołaj je odpowiednio zgodnie z desginem
 *
 * W razie potrzeby możesz zajrzeć do przykładowego rozwiązania któro jest w folderze exercise000_solution
 *
 */

export const MetricsApp = () => {
  return (
    <article>
      <div style={{ display: "flex", gap: 20 }}>
        <Metric1 />
        <Metric2 />
        <Metric3 />
      </div>
    </article>
  );
};
