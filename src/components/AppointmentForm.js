// import React, { useState } from "react";
// import Logo from "./Logo";
// export default function AppointmentForm() {
//   const [programare, setProgramare] = useState({
//     numePrenume: "",
//     numarTelefon: "",
//     email: "",
//     serviciuDorit: "",
//     data: "",
//     ora: "",
//   });
//   const [eroare, setEroare] = useState("");
//   const [campuriLipsa, setCampuriLipsa] = useState([]);
//   const [mesajConfirmare, setMesajConfirmare] = useState("");

//   const handleInputChange = (event) => {
//     // this line extracts two properties from the "event.target" object,
//     // the DOM element fired the event.
//     // the "name" property represents the "name" attribute of the DOM element, i.e. the "input" and "select"
//     // which is usually set to uniquely identify the input field.
//     // The "value" property represents the value entered into the input field when the event is fired.
//     const { name, value } = event.target;
//     setProgramare({ ...programare, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Check if all fields are filled
//     const campuri = [
//       "numePrenume",
//       "numarTelefon",
//       "email",
//       "serviciuDorit",
//       "data",
//       "ora",
//     ];
//     const campuriIncomplete = campuri.filter((camp) => !programare[camp]);

//     if (campuriIncomplete.length > 0) {
//       setCampuriLipsa(campuriIncomplete);
//       setEroare("Toate câmpurile trebuie completate!");

//       return;
//     } else {
//       setMesajConfirmare("Programarea a fost trimisă cu succes!");
//     }

//     // Save appointment and reset form
//     // Here it can be add the logic to send the schedule to the server or save it elsewhere
//     setEroare("");
//     setCampuriLipsa([]);
//     console.log("Programarea trimisă:", programare);
//   };

//   return (
//     <>
//       <Logo />
//       <form className="container_input" onSubmit={handleSubmit}>
//         <p className="form_title">Formular programari salon înfrumusețare</p>

//         <label htmlFor="numePrenume">Nume Prenume *</label>
//         <input
//           id="numePrenume"
//           type="text"
//           className="input"
//           placeholder="Nume Prenume"
//           title="Nume Prenume"
//           name="numePrenume" // the "name" attribute is used in the input and select elements to uniquely identify the field to which it is attached. When an input or select event is fired, the "name" attribute is used to extract the corresponding value from the event.target object. This value is then used to update the state of the programare object using the handleInputChange function.
//           value={programare.numePrenume}
//           onChange={handleInputChange}
//         />

//         <label htmlFor="numarTelefon">Număr telefon *</label>
//         <input
//           id="numarTelefon"
//           type="tel"
//           className="input"
//           placeholder="Numar telefon"
//           title="Numar telefon"
//           name="numarTelefon"
//           value={programare.numarTelefon}
//           onChange={handleInputChange}
//         />
//         <label htmlFor="email">Email *</label>
//         <input
//           id="email"
//           type="email"
//           className="input"
//           placeholder="Email"
//           title="email"
//           name="email"
//           value={programare.email}
//           onChange={handleInputChange}
//         />
//         <label htmlFor="data">Data programării *</label>
//         <input
//           id="data"
//           type="date"
//           className="input"
//           placeholder="Selecteaza data"
//           title="Selecteaza data dorita"
//           name="data"
//           value={programare.data}
//           onChange={handleInputChange}
//         />
//         <label htmlFor="ora">Ora programării *</label>
//         <input
//           id="ora"
//           type="time"
//           className="input"
//           placeholder="Selecteaza ora"
//           title="Selecteaza ora dorita"
//           name="ora"
//           value={programare.ora}
//           onChange={handleInputChange}
//         />
//         <label htmlFor="serviciuDorit">Alege serviciul dorit *</label>
//         <select
//           id="serviciuDorit"
//           className="input"
//           title="Selectati serviciul dorit"
//           name="serviciuDorit"
//           value={programare.serviciuDorit}
//           onChange={handleInputChange}
//         >
//           {/* <option value="">Alege serviciul dorit</option> */}
//           <option value="Coafor">Coafor</option>
//           <option value="Manichiura/Pedichiura">Manichiura/Pedichiura</option>
//           <option value="Cosmetica">Cosmetica</option>
//         </select>
//         {campuriLipsa.length > 0 && (
//           <div>
//             <p style={{ color: "red" }}>Campurile lipsă:</p>
//             <ul>
//               {campuriLipsa.map((camp, index) => (
//                 <li key={index}>{camp}</li>
//               ))}
//             </ul>
//           </div>
//         )}
//         <button type="submit">Trimite programarea</button>
//         {eroare && <p style={{ color: "red" }}>{eroare}</p>}
//         {mesajConfirmare && (
//           <div>
//             <h2>Programare completă:</h2>
//             <div>
//               <p>Nume Prenume: {programare.numePrenume}</p>
//               <p>Număr Telefon: {programare.numarTelefon}</p>
//               <p>Email: {programare.email}</p>
//               <p>Serviciu Dorit: {programare.serviciuDorit}</p>
//               <p>Data: {programare.data}</p>
//               <p>Ora: {programare.ora}</p>
//               <p style={{ color: "red" }}>{mesajConfirmare}</p>
//             </div>
//           </div>
//         )}
//       </form>
//     </>
//   );
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "./Logo";

export default function AppointmentForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <>
      <Logo />
      <form
        onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
        className="container_input"
      >
        <p className="form_title">Formular programari salon înfrumusețare</p>
        <div className="input-group">
          <label htmlFor="nume">
            Nume si Prenume <span style={{ color: "red" }}>*</span>
          </label>
          <input
            {...register("nume")}
            id="nume"
            type="text"
            name="nume"
            placeholder="Exemplu: Ion Popescu"
            title="Nume si Prenume"
            className="input"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="numarTelefon">
            Număr telefon <span style={{ color: "red" }}>*</span>
          </label>
          <input
            {...register("numarTelefon")}
            id="numarTelefon"
            type="tel"
            name="numarTelefon"
            placeholder="07xx xxx xxx"
            title="Numar Telefon"
            className="input"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">
            Email <span style={{ color: "red" }}>*</span>
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            name="email"
            placeholder="ion.popescu@yahoo.com"
            title="email"
            className="input"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="serviciuDorit">
            Alege serviciul dorit <span style={{ color: "red" }}>*</span>
          </label>
          <select
            {...register("serviciuDorit")}
            id="serviciuDorit"
            name="serviciuDorit"
            title="Selectati serviciul dorit"
            className="select"
            required
          >
            {/* <option value=""></option> */}
            <option value="Coafor">Coafor</option>
            <option value="Manichiura/Pedichiura">Manichiura/Pedichiura</option>
            <option value="Cosmetica">Cosmetica</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="data">
            Data programării <span style={{ color: "red" }}>*</span>
          </label>
          <input
            {...register("data")}
            id="data"
            type="date"
            name="data"
            title="Selecteaza data dorita"
            className="input"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="mentiuni">Mentiuni</label>
          <textarea
            {...register("mentiuni")}
            id="mentiuni"
            type="text"
            name="mentiuni"
            title="Mentiuni"
            placeholder="Mentiuni"
            className="input"
          />
        </div>
        <p>{data}</p>
        <input
          type="submit"
          value="Trimite programarea"
          className="appointment_button"
        />
        <br></br>
      </form>
    </>
  );
}
