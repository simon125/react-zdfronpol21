import React from "react";
import classes from "./StyleCSSModule.module.css";
/**
 * Stylowanie komponentu za pomocą zewnętrznego pliku CSS
 * z suffixem w nazwię .module.css
 *
 * tzw css-modules
 *
 * główne zaleta:
 * - zakres CSS - enkapsulacja styli
 */

export const StyleCSSModules = () => {
  return <article className={classes.mojaKlasa}>StyleCSSModules</article>;
};
