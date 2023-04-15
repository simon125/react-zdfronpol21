import React, { Component } from "react";

/**
 * Po przerobieniu wszystkich modułów opowiemy sobie nieco więcej o komponencie klasowym
 */

/**
 * Recatowy komponent klasowy
 *
 * - jak nazwa wskazuje składa się z klasy JSowej która rozszerza (extends)
 * klasę Component która pochodz z bliblioteki React
 *
 * - komponent klasowy musi zawierać metode o nazwie render która zwraca JSX lub dowolny ReactNode
 */

export class KomponentyKlasowy extends Component {
  render() {
    return (
      <article>
        Komponenty Klasowy - dalsze omówienie po skończeniu wszystkich modułów
      </article>
    );
  }
}
