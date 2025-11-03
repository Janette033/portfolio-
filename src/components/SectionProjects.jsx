import React, { useState } from "react";
import Card from "./Card";

export default function SectionProjects() {
  const [showSkills, setShowSkills] = useState(false);

  const skills = [
    "Figma",
    "HTML / CSS / JavaScript",
    "React / Vite",
    "UX Research",
    "Responsiivinen suunnittelu",
  ];

  const projects = [
    { id: 1, title: "AI työkalu prototyyppi", img: "/placeholder.png", desc: "Esittelyteksti projekti 1" },
    { id: 2, title: "Vaatepuu - itsepalveluna toimiva vaatelainamo", img: "src/assets/projekti2.png", desc: "Tutkimme tiimin kanssa käyttäjien tarpeita ja loimme ratkaisuja, jotka tekevät palvelusta selkeän, luotettavan ja inspiroivan. Lopputuloksena tehtäväni oli rakentaa mockupit kolmesta näkymästä: vaatteen tarkastelu, vaiheittainen palautus ja asuinspiraatio" }, // ✅ fix img path
    { id: 3, title: "Verkkosivuja", img: "/placeholder.png", desc: "Esittelyteksti projekti 3" },
  ];

  return (
    <section className="projects-section">

      {/* Otsikko */}
      <div className="projects-header reveal delay-0">
        <h2>Projektit & taidot</h2>
        <p>
          Täällä on esillä tekemäni projektit sekä osaamiseni teknologiat ja työkalut.
        </p>
      </div>

      {/* Toggle */}
      <div className="projects-toggle reveal delay-1">
        <button
          className={`toggle-btn ${!showSkills ? "active" : ""}`}
          onClick={() => setShowSkills(false)}
        >
          Projektit
        </button>
        <button
          className={`toggle-btn ${showSkills ? "active" : ""}`}
          onClick={() => setShowSkills(true)}
        >
          Taidot
        </button>
      </div>

      {/* Content */}
      {showSkills ? (
        <div className="skills-grid reveal delay-2">
          {skills.map((s, i) => (
            <div key={i} className={`skill-badge reveal delay-${i + 2}`}>
              {s}
            </div>
          ))}
        </div>
      ) : (
        <div className="projects-cards">
          {projects.map((p, i) => (
            <Card
              key={p.id}
              {...p}
              link={`/project${p.id}`}
              className={`reveal delay-${i + 1}`} // ✅ pass reveal correctly
            />
          ))}
        </div>
      )}
    </section>
  );
}



