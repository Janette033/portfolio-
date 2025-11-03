import React from "react";

export default function AboutDetail() {
  return (
    <section className="about-section">
      <div className="about-left">
        <h1 className="reveal delay-0">Minusta</h1>
        <p className="reveal delay-1">
          Olen frontend-kehittäjä, joka suunnittelee moderneja ja
          responsiivisia verkkosivustoja. Minulle tärkeintä on
          käyttäjäystävällisyys ja visuaalinen selkeys.
        </p>
      </div>

      <div className="about-right reveal delay-3">
        <img src="src/assets/profile.png" alt="Minä" />
      </div>
    </section>
  );
}