import React from "react";
import classes from "./Button.module.css";

/**
 * NAMED EXPORTS
 *
 * VS
 *
 * DEFAULT EXPORTS
 */

// named export

// export const Button = () => {
//   return <button className={classes.button}>Click me</button>;
// };

/**
 * Named export
 */

export const Button = () => {
  return <button className={classes.button}>Click me</button>;
};

export const Button1 = () => {
  return <button>Click me</button>;
};

export const Button2 = () => {
  return <button style={{ background: "green" }}>Click me</button>;
};

/**
 * Default export
 *
 * defaultowy export jest tylko jeden na plik
 */

export default Button;
