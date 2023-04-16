import React from "react";
import "./StyleCSS.css";
/**
 * Stylowanie komponentu za pomocą zewnętrzengo pliku ze stylami
 * "klasyczne podejście"
 */
export const StyleCSS = () => {
  const zmienna =
    /*dużo logiki która wybiera jaką klase zaaplikować */ "moja-klasa";
  return (
    <article className={zmienna}>
      StyleCSS
      <div className="klasa-xd">Div z klasycznie przypisaną klasą</div>
    </article>
  );
};
