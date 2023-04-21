import React from "react";
import { Parent } from "./Parent";

/**
 * Twoim zadaniem jest stworzenie 4 komponentów
 * - GranParent (istnieje),
 * - Parent (Parent.js)
 * - Child (Child.js)
 * - GrandChild (GrandChild.js)
 *
 * Niech powyższa kolejność będzie odzwierciedlona w zagnieżdzeniach
 * komponentów tzn. niech GrandParent importuje i wywołuje komponent Parnet
 * Parent niech importuje i wywołuje Child
 * Child niech importuje i wywołuje GandChild
 *
 * dodatkowo zmienne w komponencie GrandParent powinny być przetransportowane na sam dół
 * tzn name age oraz funkcja sayHello mają być przekazane poprzez propsy każdorazowo
 * do komponentu GrandChild - czyli w każdym komponencie będziesz musiał/musiała
 * propsy odebrać z parametru i przekazać je do komponentu niżej aż do GrandChild
 *
 * zmienne name i age po dotarciu do komponentu GrandChild powinny zostać wyświetlone w tym komponencie
 * dodatko stwórz przycisk który po kliknieciu wywoła funkcje sayHello
 *
 * ⭐funckja sayHello powinna wyswietlać zmienne name i age po nacisnięciu przycisku
 * w komponencie GrandChild - nie ma tam przycisku ??? w projekcie w takiej sytuacji
 * najbezpieczniej jest się dopytać i upewnić czy jeżeli nie ma przycisku to zcy trzeba
 * go też dorobić - takie sytuacje się zdażają i czasem samowolka w projektach jest dopuszczalna
 * czasem trzeba o prawie wszystko dopytywać
 *
 * są dwa podejścia 1 sprytne 😉
 */

export const GrandParent = () => {
  const name = "John";
  const age = 25;

  const sayHello = () => {};

  return (
    <article>
      GrandParent
      <Parent name={name} age={age} sayHello={sayHello} />
    </article>
  );
};
