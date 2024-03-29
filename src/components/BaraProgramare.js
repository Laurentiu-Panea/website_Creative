import React from "react";
import { Link } from "react-router-dom";

export default function BaraProgramare() {
  return (
    <>
      <div className="container_butoane">
        <button
          className="telefon"
          onClick={() => alert("formeaza 0745062538 ?")}
        >
          ☎
        </button>{" "}
        <button className="bara_programare">
          <Link to="/Formular-programare">Programeaza-te !!!</Link>
        </button>
      </div>
    </>
  );
}
