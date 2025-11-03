import React from "react";
import Card from "./Card";

export default function Projects() {
  const projects = [
    { id: 1, title: "Projekti 1", img: "/placeholder.png", desc: "Esittelyteksti projekti 1" },
    { id: 2, title: "Vaatepuu - itsepalveluna toimiva vaatelainamo", img: "src/assets/projekti2.png", desc: "Tutkimme tiimin kanssa käyttäjien tarpeita ja loimme ratkaisuja, jotka tekevät palvelusta selkeän, luotettavan ja inspiroivan. Lopputuloksena tehtäväni oli rakentaa mockupit kolmesta näkymästä: vaatteen tarkastelu, vaiheittainen palautus ja asuinspiraatio" }, // ✅ polku
    { id: 3, title: "Projekti 3", img: "/placeholder.png", desc: "Esittelyteksti projekti 3" },
  ];

  return (
    <section className="projects-section">
      
      <div className="projects-header reveal delay-0">
        <h2>Projektit</h2>
        <p>Täällä näet tarkemmin tekemäni projektit ja niiden kuvaukset.</p>
      </div>

      <div className="projects-cards">
        {projects.map((p, i) => (
          <Card
            key={p.id}
            {...p}
            link={`/project${p.id}`}
            className={`reveal delay-${i + 1}`} // ✅ pidetään vain korttilistassa
          />
        ))}
      </div>
    </section>
  );
}



