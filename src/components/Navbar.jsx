import React, { useState, useEffect } from "react";
import ThemeSwitch from "./ThemeSwitch";
import "../index.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">LOGO</div>

          <div className="nav-links desktop-only">
            <a href="/">Etusivu</a>
            <a href="/portfolio">Projektit</a>
            <a href="/about">Minusta</a>
          </div>
        </div>

        <div className="nav-right desktop-only">
          <a
            href="mailto:youremail@example.com?subject=Yhteydenotto"
            className="btn btn-primary nav-cta"
          >
            Ota yhteyttä
          </a>
          <ThemeSwitch />
        </div>

          {!menuOpen && (
            <button className="hamburger mobile-only" onClick={toggleMenu}>
              ☰
            </button>
          )}
      </nav>

      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="drawer-close" onClick={closeMenu}>✕</button>

        <a href="/" onClick={closeMenu}>Etusivu</a>
        <a href="/portfolio" onClick={closeMenu}>Projektit</a>
        <a href="/about" onClick={closeMenu}>Minusta</a>

        <hr />

        <a
          href="mailto:youremail@example.com?subject=Yhteydenotto"
          className="btn btn-primary nav-cta drawer-cta"
          onClick={closeMenu}
        >
          Ota yhteyttä
        </a>

        <div className="drawer-theme">
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
}








