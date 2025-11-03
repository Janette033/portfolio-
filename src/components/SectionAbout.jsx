import React from "react";
import profileImg from "../assets/profile.png";

export default function SectionAbout() {
  return (
    <section className="about-section">
      <div className="about-left">
        <h1 className="reveal delay-0">Minusta</h1>
        <p className="reveal delay-1">
          Olen frontend-kehittäjä, joka suunnittelee moderneja ja responsiivisia
          verkkosivustoja. Minulle tärkeintä on käyttäjäystävällisyys ja visuaalinen selkeys.
        </p>

        <a href="/about" className="btn btn-primary reveal delay-2">
          Lue lisää
        </a>
      </div>

      <div className="about-right reveal delay-3">
        <img src={profileImg} alt="Minä" />
      </div>
    </section>
  );
}



