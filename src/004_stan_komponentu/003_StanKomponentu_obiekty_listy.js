import React, { useState } from "react";

/**
 * Stan komponentu
 *
 * - destrukturyzacja - przypomnienie
 * - hooki
 * - funkcja useState - state i setState
 * - co w tym stanie mozna trzymać?
 * - tylko jeden stan? - jednokrotne vs wielokrotne użycie hooka useState
 * - funkcja setState synchroniczna czy asnychroniczna?
 * - computed state!!!
 *
 * przykład z setTimeout
 */
const initialAddress = {
  city: "Warsaw",
  street: "dworcowa",
  postalCode: 123,
};

export const StanKomponentu = () => {
  const [name, setName] = useState("John");
  const [lastName, setLastName] = useState("Doe");

  const [age, setAge] = useState(25);

  const [address, setAddress] = useState(initialAddress);

  const [users, setUsers] = useState(["John", "Jane", "Jack"]);

  // setTimeout(() => {
  //   /**
  //    * PRACA Z OBIEKTAMI
  //    */
  //   /**
  //    * Kompletnie nowy obiekt jako nowy stan
  //    */
  //   const newAddress = { city: "Cracow", street: "dluga", postalCode: 29 };
  //   setAddress(newAddress);
  //   console.log(address);
  //   /**
  //    * Aktualizajca stanu na podstawie stanu poprzedniego
  //    */

  //   // setAddress((prevAddress) => ({ ...prevAddress, city: "Lublin" }));

  //   /**
  //    * PRACA Z TABLICAMI* wiecej o tablicach w listy_table
  //    */

  //   // setUsers((prevUsers) => [...prevUsers, "John"]);
  // }, 6000);

  return (
    <article>
      StanKomponentu
      <p>Name: {name}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
      <p>City: {address.city}</p>
      <p>Street: {address.street}</p>
      <p>Users: {users}</p>
    </article>
  );
};
