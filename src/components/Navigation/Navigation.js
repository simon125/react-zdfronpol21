import React, { useState } from "react";
import { Link } from "react-router-dom";
import BURGER from "./burger-bar.png";

const lineItemStyle = { listStyle: "none" };

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const handleCloseClick = () => {
    setOpen(false);
  };

  return (
    <div style={{ background: "#eee", position: "sticky", top: 0 }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 25 }}>React wprowadzenie</h1>
        <button
          onClick={() => setOpen(true)}
          style={{
            background: "transparent",
            border: "none",
            width: "fit-content",
            margin: 0,
          }}
        >
          <img width={35} src={BURGER} alt="burger" />
        </button>
      </div>
      <dialog open={open} onClick={handleCloseClick}>
        <button
          style={{
            background: "transparent",
            border: "none",
            fontSize: 90,
            color: "black",
            position: "absolute",
            width: "fit-content",
            top: 20,
            right: 100,
          }}
        >
          &times;
        </button>
        <article onClick={(e) => e.stopPropagation()}>
          <ul
            style={{
              listStyle: "none",
              textAlign: "center",
            }}
          >
            <li style={lineItemStyle}>
              <Link onClick={handleCloseClick} to="/">
                Komponent
              </Link>
            </li>
            <li style={lineItemStyle}>
              <Link onClick={handleCloseClick} to="/css">
                CSS
              </Link>
            </li>
            <li style={lineItemStyle}>
              <Link onClick={handleCloseClick} to="/relations-and-imports">
                Relacje
              </Link>
            </li>
            <li style={lineItemStyle}>
              <Link onClick={handleCloseClick} to="/assets">
                Obrazki (Assety)
              </Link>
            </li>
            <li style={lineItemStyle}>
              <Link onClick={handleCloseClick} to="/state">
                Stan Komponentu
              </Link>
            </li>
            <li style={lineItemStyle}>
              <Link onClick={handleCloseClick} to="/events">
                Eventy, Inputy, Formularze
              </Link>
            </li>
            <li style={lineItemStyle}>
              <Link onClick={handleCloseClick} to="/props">
                Propsy
              </Link>
            </li>
            <li style={lineItemStyle}>
              <Link onClick={handleCloseClick} to="/listings">
                Listingi
              </Link>
            </li>
            <li style={lineItemStyle}>
              <Link onClick={handleCloseClick} to="/conditionals">
                Wyświetlanie warunkowe
              </Link>
            </li>
            <li style={lineItemStyle}>
              <Link onClick={handleCloseClick} to="/lifecycle">
                Cykl życia komponentu
              </Link>
            </li>
            <li style={lineItemStyle}>
              <Link onClick={handleCloseClick} to="/project">
                Projekt
              </Link>
            </li>
          </ul>
        </article>
      </dialog>
    </div>
  );
};
