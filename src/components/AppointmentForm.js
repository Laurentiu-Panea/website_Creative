import React, { useState } from "react";
import Logo from "./Logo";
export default function AppointmentForm() {
  const [programare, setProgramare] = useState({
    numePrenume: "",
    numarTelefon: "",
    email: "",
    serviciuDorit: "",
    data: "",
    ora: "",
  });
  const [eroare, setEroare] = useState("");
  const [campuriLipsa, setCampuriLipsa] = useState([]);
  const [mesajConfirmare, setMesajConfirmare] = useState("");

  const handleInputChange = (event) => {
    // this line extracts two properties from the "event.target" object,
    // the DOM element fired the event.
    // the "name" property represents the "name" attribute of the DOM element, i.e. the "input" and "select"
    // which is usually set to uniquely identify the input field.
    // The "value" property represents the value entered into the input field when the event is fired.
    const { name, value } = event.target;
    setProgramare({ ...programare, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are filled
    const campuri = [
      "numePrenume",
      "numarTelefon",
      "email",
      "serviciuDorit",
      "data",
      "ora",
    ];
    const campuriIncomplete = campuri.filter((camp) => !programare[camp]);

    if (campuriIncomplete.length > 0) {
      setCampuriLipsa(campuriIncomplete);
      setEroare("Toate câmpurile trebuie completate!");

      return;
    } else {
      setMesajConfirmare("Programarea a fost trimisă cu succes!");
    }

    // Save appointment and reset form
    // Here it can be add the logic to send the schedule to the server or save it elsewhere
    setEroare("");
    setCampuriLipsa([]);
    console.log("Programarea trimisă:", programare);
  };

  return (
    <>
      <Logo />
      <form className="container_input" onSubmit={handleSubmit}>
        <p className="form_title">Formular programari salon înfrumusețare</p>
        <input
          className="input"
          placeholder="Nume Prenume"
          name="numePrenume"
          value={programare.numePrenume}
          onChange={handleInputChange}
        />
        <input
          className="input"
          placeholder="Numar telefon"
          name="numarTelefon"
          value={programare.numarTelefon}
          onChange={handleInputChange}
        />
        <input
          className="input"
          placeholder="Email"
          name="email"
          value={programare.email}
          onChange={handleInputChange}
        />
        <input
          type="date"
          className="input"
          placeholder="Selecteaza data"
          name="data"
          value={programare.data}
          onChange={handleInputChange}
        />
        <input
          type="time"
          className="input"
          placeholder="Selecteaza ora"
          name="ora"
          value={programare.ora}
          onChange={handleInputChange}
        />
        <select
          className="input"
          title="Selectati serviciul dorit"
          name="serviciuDorit"
          value={programare.serviciuDorit}
          onChange={handleInputChange}
        >
          <option value="">Alege serviciul dorit</option>
          <option value="Coafor">Coafor</option>
          <option value="Manichiura/Pedichiura">Manichiura/Pedichiura</option>
          <option value="Cosmetica">Cosmetica</option>
        </select>
        {campuriLipsa.length > 0 && (
          <div>
            <p style={{ color: "red" }}>Campurile lipsă:</p>
            <ul>
              {campuriLipsa.map((camp, index) => (
                <li key={index}>{camp}</li>
              ))}
            </ul>
          </div>
        )}
        <button type="submit">Trimite programarea</button>
        {eroare && <p style={{ color: "red" }}>{eroare}</p>}
        {mesajConfirmare && (
          <div>
            <h2>Programare completă:</h2>
            <div>
              <p>Nume Prenume: {programare.numePrenume}</p>
              <p>Număr Telefon: {programare.numarTelefon}</p>
              <p>Email: {programare.email}</p>
              <p>Serviciu Dorit: {programare.serviciuDorit}</p>
              <p>Data: {programare.data}</p>
              <p>Ora: {programare.ora}</p>
              <p style={{ color: "red" }}>{mesajConfirmare}</p>
            </div>
          </div>
        )}
      </form>
    </>
  );
}
