import React, { useEffect, useState } from "react";

export const Notatka = () => {
  const [counter1, setCounter1] = useState(0);
  const [slowo, setSlowo] = useState("");

  useEffect(() => {
    console.log(
      "1 useEffect - bez tablicy zależności - wywołam się przy każdym rerenderze"
    );
  });

  useEffect(() => {
    console.log("2 useEffect - z pustą tablica zależności");
  }, []);

  useEffect(() => {
    console.log("3 useEffect - reakcja na zmiane slowa w inpucie");

    if (slowo === "brzydkie slowo") {
      /**
       * 1) requeust do back
       * 2) wyswieltic komunikat
       */
      alert("nie pisz brzydkich slow");
    }

    return () => {
      console.log("właśnie komponent List znikną z erkanu");
    };
  }, [slowo]);

  return (
    <div>
      <div>
        <h2>{counter1}</h2>
        <input
          type="text"
          value={slowo}
          onChange={(event) => setSlowo(event.target.value)}
        />
        <button onClick={() => setCounter1(counter1 + 1)}>+1</button>
      </div>
    </div>
  );
};
