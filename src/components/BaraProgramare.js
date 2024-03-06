import React from "react";

export default function BaraProgramare({
  seteazaStareFormular,
  stareFormulare,
}) {
  const toggleFormular = () => {
    seteazaStareFormular((open) => !open);
  };

  return (
    <div className="container_butoane">
      <button
        className="telefon"
        onClick={() => alert("formeaza 074xxxxxxx ?")}
      >
        ☎
      </button>{" "}
      <button className="bara_programare" onClick={toggleFormular}>
        {stareFormulare ? "Inchide formularul" : "📅 Programeaza-te"}
      </button>
    </div>
  );
}
