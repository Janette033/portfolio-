import React from "react";
import "../Project2.css";

// ✅ KUVIEN TUONTI
import natureImg from "../assets/nature.jpg";
import teemoittelu from "../assets/teemoittelu.png";
import empatiakartta from "../assets/empatiakartta.png";
import palvelupolku from "../assets/palvelupolku.png";

import palautus1 from "../assets/palautus1.png";
import palautus2 from "../assets/palautus2.png";
import palautus3 from "../assets/palautus3.png";
import palautus4 from "../assets/palautus4.png";

import vaatetarkastelu1 from "../assets/vaatteentarkastelu1.png";
import vaatetarkastelu2 from "../assets/vaatteentarkastelu2.png";
import inspiraatio from "../assets/inspiraatio.png";

export default function Project2() {
  return (
    <div className="cs">

      {/* HERO */}
      <section className="cs-hero">
        <div 
          className="cs-hero__bg"
          style={{ backgroundImage: `url(${natureImg})` }}
        />

        <div className="cs-hero__inner">
          <p className="eyebrow">Case study</p>
          <h1>Vaatepuu – Itsepalveluna toimiva vaatelaina</h1>
          <p className="lead">
            Käyttäjätutkimuksen pohjalta syntyi kolme konseptia, jotka tekevät
            vaatteiden lainaamisesta helpompaa, läpinäkyvämpää ja inspiroivampaa.
          </p>
          <div className="cs-hero__meta">
            <span>Rooli: UX / UI-suunnittelu</span>
            <span>Kesto: 6 viikkoa</span>
            <span>Menetelmät: haastattelut, teemoittelu </span>
            <span>Työkalut: Figma </span>
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="cs-wrap">
        <div className="cs-cards">
          <div className="cs-card">
            <h3>Ongelma</h3>
            <p>
              Miten jatkaa vaatteiden lainausta ilman kivijalkaa ja poistaa
              käyttäjien epävarmuus kunnosta, istuvuudesta ja palautuksesta?
            </p>
          </div>
          <div className="cs-card">
            <h3>Tavoite</h3>
            <p>
              Luoda kevyt itsepalvelumalli: läpinäkyvä tuotenäkymä,
              vaiheittainen palautus ja tilannepohjainen inspiraatio.
            </p>
          </div>
          <div className="cs-card">
            <h3>Rajaus</h3>
            <p>
              Konseptisuunnittelu, ei toimiva prototyyppi. Käyttäjätutkimus
              ohjasi ideointia ja mockupit toimivat havainnollistuksena.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="cs-wrap">
        <h2>Prosessi lyhyesti</h2>
        <ol className="cs-steps">
          <li><span>1</span> Suunnittelimme tutkimuskysymykset ja tavoitteet</li>
          <li><span>2</span> Toteutimme 15 haastattelua (ikäryhmä 18–35v)</li>
          <li><span>3</span> Analysoimme aineiston teemoittelun avulla</li>
          <li><span>4</span> Laadimme persoonat ja palvelupolun</li>
          <li><span>5</span> Konseptoinnin tuloksena syntyi 3 mockupia</li>
        </ol>
      </section>

      {/* RESEARCH ARTIFACTS */}
      <section className="cs-wrap research-section">
        <h2>Keskeiset tutkimusmateriaalit</h2>

        <div className="research-block">
          <h3>Teemoittelu</h3>
          <p>
            Haastattelujen jälkeen kävimme havainnot yhdessä läpi...
          </p>
          <img src={teemoittelu} alt="Teemoittelukaavio" />
        </div>

        <div className="research-block">
          <h3>Empatiakartta</h3>
          <p>
            Palvelupolun avulla tarkastelimme käyttäjän matkaa...
          </p>
          <img src={empatiakartta} alt="Empatiakartta" />
        </div>

        <div className="research-block">
          <h3>Palvelupolku</h3>
          <p>
            Empatiakartan avulla syvensimme ymmärrystä...
          </p>
          <img src={palvelupolku} alt="Palvelupolku" />
        </div>
      </section>

      {/* MOCKUPS */}
      <section className="cs-wrap">
        <h2>Ratkaisujen konkreettiset mockupit</h2>

        <div className="mockup-group">
          <h3>Itsepalvelupalautus (4 vaihetta)</h3>
          <p>Selkeä, vaiheistettu itsepalvelupalautus...</p>
          <div className="mockup-row">
            <img src={palautus1} alt="Palautus vaihe 1" />
            <img src={palautus2} alt="Palautus vaihe 2" />
            <img src={palautus3} alt="Palautus vaihe 3" />
            <img src={palautus4} alt="Palautus vaihe 4" />
          </div>
        </div>

        <div className="mockup-group">
          <h3>Vaatteen tarkastelu & varaus (2 näkymää)</h3>
          <p>Läpinäkyvät materiaalitiedot...</p>
          <div className="mockup-row">
            <img src={vaatetarkastelu1} alt="Vaatteen katselu 1" />
            <img src={vaatetarkastelu2} alt="Vaatteen katselu 2" />
          </div>
        </div>

        <div className="mockup-group">
          <h3>Tilannekohtainen inspiraatio</h3>
          <p>Tilannepohjaiset asuehdotukset...</p>
          <div className="mockup-row">
            <img src={inspiraatio} alt="Asuinspiraatio" />
          </div>
        </div>
      </section>

      {/* HAASTEET & OPIT */}
      <section className="cs-wrap cs-footer">
        <h2>Haasteet & opit</h2>
        <div className="cs-impact">
          <div>
            <h4>Haasteet</h4>
            <ul>
              <li>Kuinka rakentaa luottamus ilman fyysistä myymälää</li>
              <li>Käyttäjille vieras itsepalvelumalli</li>
              <li>Toimeksianto oli osittain epäselvä ja aikaa oli rajoitetusti</li>
            </ul>
          </div>

          <div>
            <h4>Mitä opin</h4>
            <ul>
              <li>Käyttäjätutkimus</li>
              <li>Käyttöliittymäsuunnittelu</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}



