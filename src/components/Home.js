import React from "react";
import BaraProgramare from "./BaraProgramare";
import ButonProgramare from "./ButonProgramare";
import Logo from "./Logo";

export default function Home() {
  return (
    <>
      <Logo />
      {/* <BaraProgramare /> */}
      <div className="home-container">
        <h2 className="home-title">Creative Beauty Studio</h2>
        <h2 className="home-subtitle">Salon de înfrumusețare Reghin</h2>
        <h4 className="home-description">
          Vrei o schimbare de look? Programarea la Salonul de înfrumusețare
          Beauty Studio din Reghin îți garantează că o vei obține. Te așteptăm
          cu servicii de înfrumusețare profesionale!
        </h4>
        <h4 className="home-description">
          Creactive Beauty Studio este locul unde facem totul pentru a dărui
          bucurii și frumusețe. Frumusețea pornește de la oamenii care
          alcătuiesc echipa dar și de la cele mai mici detalii, alese și
          aranjate cu grijă, pentru a crea un ambient deosebit.
        </h4>
        <ButonProgramare />
      </div>
    </>
  );
}
