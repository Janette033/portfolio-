import React from "react";
import heroImg from "../assets/palceholder.webp";

export default function SectionHero() {
  return (
    <div className="hero-wrapper">
      <section className="hero-section">
        <div className="hero-left">
          <h1 className="reveal delay-0">Tervetuloa portfoliooni</h1>
          <p className="reveal delay-1">
            Tässä voi olla esimerkki tekstiä, joka kuvaa sinua tai työtäsi.
          </p>

          <div className="hero-buttons reveal delay-2">
            <a href="/portfolio" className="btn btn-primary">
              Projektit
            </a>
            <a
              href="mailto:youremail@example.com?subject=Yhteydenotto"
              className="btn btn-outline hero-outline"
            >
              Ota yhteyttä
            </a>
          </div>
        </div>

        <div className="hero-right reveal delay-3">
          <img src={heroImg} alt="Hero" />
        </div>
      </section>
    </div>
  );
}




