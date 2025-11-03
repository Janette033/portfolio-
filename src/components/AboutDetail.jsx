import React from "react";
import profileImg from "../assets/profile.jpeg"; // ✅ tuo kuva oikein

export default function AboutDetail() {
  return (
    <section className="about-section">
      <div className="about-left">
        <h1 className="reveal delay-0">Minusta</h1>
        <p className="reveal delay-1">
          Kuvaus
        </p>
      </div>

      <div className="about-right reveal delay-3">
        <img src={profileImg} alt="Minä" /> {/* ✅ toimii Vercelissä */}
      </div>
    </section>
  );
}
