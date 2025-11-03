import React from "react";
import "../Project2.css";

export default function Project2() {
  return (
    <div className="cs">

      {/* HERO */}
      <section className="cs-hero">
        <div className="cs-hero__bg" />
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
            <span>Menetelmät: haastattelut, teemoittelu, synteesi</span>
            <span>Työkalut: Figma, React</span>
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
          <li><span>1</span>Suunnittelimme tutkimuskysymykset ja tavoitteet</li>
          <li><span>2</span>Toteutimme 15 haastattelua (ikäryhmä 18–35v)</li>
          <li><span>3</span>Analysoimme aineiston teemoittelun avulla</li>
          <li><span>4</span>Laadimme persoonat ja palvelupolun</li>
          <li><span>5</span>Konseptoinnin tuloksena syntyi 3 mockupia</li>
        </ol>
      </section>

      {/* RESEARCH ARTIFACTS */}
      <section className="cs-wrap research-section">
        <h2>Keskeiset tutkimusmateriaalit</h2>

        <div className="research-block">
          <h3>Teemoittelu</h3>
          <p>Haastattelujen jälkeen kävimme havainnot yhdessä läpi. Projektissa visuaalista
             teemoittelua ei vaadittu, mutta halusin syventää omaa tutkimusosaamistani 
            ja kokosin teemoittelun tiimille. Aluksi kommentit tuntuivat 
            hajanaisilta, mutta teemoittelu auttoi löytämään selkeät toistuvat tarpeet.
            Käyttäjille tärkeintä oli saada varmuus vaatteen kunnosta ja istuvuudesta, 
            ymmärtää palautusprosessi ja löytää helposti inspiroivia lainausvaihtoehtoja. 
            Nämä kolme teemaa muodostivat pohjan ratkaisuille.</p>
          <img src="src/assets/teemoittelu.png" alt="Teemoittelukaavio" />
        </div>

        <div className="research-block">
          <h3>Empatiakartta</h3>
          <p>Palvelupolun avulla tarkastelimme käyttäjän matkaa 
            ensimmäisestä kiinnostuksesta palautukseen asti. 
            Huomasimme, että suurin epävarmuus syntyy ennen ensimmäistä 
            lainausta. Käyttäjä haluaa varmistaa, että prosessi on turvallinen, 
            helppo ja selkeä. Myös palautusvaihe herätti kysymyksiä: 
            “Teen­kö tämän oikein?” Polku auttoi meitä tunnistamaan 
            hetket, joissa käyttäjä tarvitsee konkreettista tukea ja mielenrauhaa.</p>
          <img src="src/assets/empatiakartta.png" alt="Empatiakartta" />
        </div>

        <div className="research-block">
          <h3>Palvelupolku</h3>
          <p>Empatiakartan avulla syvensimme ymmärrystä käyttäjän tunteista ja motiiveista. 
            Haastateltavat olivat innostuneita lainaamisesta, mutta halusivat 
            varmuutta ennen kokeilua. Esille nousi tarve luotettavuudelle, 
            inspiraatiolle ja helppoudella. Halutaan kokeilla uutta, 
            mutta matalalla kynnyksellä ja ilman virheen pelkoa. Kartta auttoi meitä 
            keskittymään siihen, että palvelun täytyy tuntua rohkaisevalta ja selkeältä.</p>
          <img src="src/assets/palvelupolku.png" alt="Palvelupolku" />
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="cs-wrap">
        <h2>Keskeiset löydökset</h2>
        <div className="cs-insights">
          <div className="cs-insight">
            <strong>“En tiedä onko vaate oikeasti hyvässä kunnossa”</strong>
            <p>Teemoittelussa ja empatiakartassa tämä näkyi toistuvina huomioina kuten:
            “Onko vaate hyvälaatuinen?”, “Miten vaatteet puhdistetaan?”, “Miten laatua valvotaan?”
            Tämä johti vaatteiden kuntohistorian, materiaalitietojen ja kuvien korostamiseen UI:ssa.</p>
          </div>
          <div className="cs-insight">
            <strong>“Palautus mietityttää”</strong>
            <p>Palvelupolussa ja empatiakartassa käyttäjät kuvailivat epävarmuutta palautusvaiheessa:
            “Teen­kö tämän oikein?”, “Mitä pitää tehdä vaiheittain?”
            Useampi epäili, miten prosessi toimii ilman henkilökuntaa.</p>
          </div>
          <div className="cs-insight">
            <strong>“En tiedä mistä aloittaa”</strong>
            <p>Alkuvaiheen epäröinti näkyi teemoittelussa ja haastatteluissa. 
              Käyttäjät kaipasivat suosituksia, inspiraatiota ja 
              helppoa tapaa löytää sopivia vaatteita ilman pitkää selausta. 
              Palvelupolussa aloitusvaihe oli tunnepuolelta
               epävarmin, mikä vahvisti tarpeen matalan kynnyksen käyttöpolulle.</p>
          </div>
        </div>
      </section>

      {/* MOCKUPS */}
      <section className="cs-wrap">
        <h2>Ratkaisujen konkreettiset mockupit</h2>

        <div className="mockup-group">
          <h3>Itsepalvelupalautus (4 vaihetta)</h3>
          <p>Selkeä, vaiheistettu itsepalvelupalautus, joka vähentää epävarmuutta.</p>
          <div className="mockup-row">
            <img src="src/assets/palautus1.png" alt="Palautus vaihe 1" />
            <img src="src/assets/palautus2.png" alt="Palautus vaihe 2" />
            <img src="src/assets/palautus3.png" alt="Palautus vaihe 3" />
            <img src="src/assets/palautus4.png" alt="Palautus vaihe 4" />
          </div>
        </div>

        <div className="mockup-group">
          <h3>Vaatteen tarkastelu & varaus (2 näkymää)</h3>
          <p>Läpinäkyvät materiaalitiedot, kuntohistoria ja selkeä varaus.</p>
          <div className="mockup-row">
            <img src="src/assets/vaatteentarkastelu1.png" alt="Vaatteen katselu 1" />
            <img src="src/assets/vaatteentarkastelu2.png" alt="Vaatteen katselu 2" />
          </div>
        </div>

        <div className="mockup-group">
          <h3>Tilannekohtainen inspiraatio</h3>
          <p>Tilannepohjaiset asuehdotukset helpottavat aloitusta.</p>
          <div className="mockup-row">
            <img src="src/assets/inspiraatio.png" alt="Asuinspiraatio" />
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
              <li>Monimutkainen palautusprosessin viestintä</li>
            </ul>
          </div>

          <div>
            <h4>Mitä opin</h4>
            <ul>
              <li>Läpinäkyvyys → luottamus → käyttö kasvaa</li>
              <li>Visualisoitu vaiheistus poistaa ahdistusta</li>
              <li>Tilannepohjainen inspiraatio madaltaa kynnystä</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}


