import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  const [isTrue, setIsTrue] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    // atunci când se face clic pe butonul de meniu,
    // se declanșează două evenimente de clic: unul pe butonul de meniu și unul pe fereastra globală,
    // deoarece evenimentul de clic pe butonul de meniu se propagă la fereastra globală,
    // ambele evenimente de clic sunt declanșate aproape simultan.
    //  e.stopPropagation() -- "opresete"  evenimentul de clic să se propage la fereastra globală, astfel încât meniul rămâne deschis.
    setIsTrue(!isTrue);
  }
  //acest useEffect este pt a disparea meniul(afisat)cand se face click inafara lui,oriunde pe pagina
  useEffect(() => {
    function handleOutsideClick(event) {
      if (isTrue && event.target.closest(".menu") === null) {
        setIsTrue(false);
      }
    }

    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isTrue]);

  function Menu() {
    return (
      <div className="menu">
        {/* {aici la path-ul "/Home" pentru ca vreau sa fie afisat in bara url acest lucru} */}
        <Link to="/Home">Home</Link>
        {/* {"a"-tag,face refresh inainte sa arate pagina,face pt Html & Js inca o data} */}
        {/* {<Link/> - NU face refresh ci face routing client-side,tranzitie instanta} */}

        {/* <a href="/Home">Home</a> */}
        <br />
        <Link to="/https://github.com/Laurentiu-Panea">GitHub Repo</Link>
        {/* <a href="https://github.com/Laurentiu-Panea">GitHub Repo</a> */}
        <br />
        <Link to="/About">About</Link>
        {/* <a href="/About">About</a> */}
        <br />
        <Link to="/Coafor">Coafor</Link>
        {/* <a href="/Coafor">Coafor </a> */}
        <br />
        <Link to="/Formular-programare">Programare</Link>
        <br />
        <Link to="/Manichiura">Manichiura</Link>
        <br />
        <Link to="/Cosmetica">Cosmetica</Link>
      </div>
    );
  }

  return (
    <>
      <h1 className="app">
        <button className="buton_Meniu" onClick={handleClick}>
          {isTrue ? "✖" : "☰"}
        </button>
        {isTrue && <Menu />}
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <p>Creativ<span className="rotatie">E</span> Beauty Studio</p>
        </a>
        <Link className="poza-logo" to="/About"></Link>
        {/* <div className="poza-logo" alt=""></div> */}
        <div className="header-links-container">
          {/* <Link className="header-link" to="/About">
            About
          </Link> */}
          <Link className="header-link" to="/Coafor">
            Coafor
          </Link>
          <Link className="header-link" to="/Manichiura">
            Manichiura
          </Link>
          <Link className="header-link" to="/Cosmetica">
            Cosmetica&Makeup
          </Link>
        </div>

        <div className="header-contact-container">
          <p
            className="header-contact-link"
            onClick={() => alert("formeaza 0745062538 ?")}
          >
            Telefon: 0745062538
          </p>
          <Link className="header-contact-link" to="/Formular-programare">
            Programeaza-te!
          </Link>
        </div>
      </h1>
    </>
  );
}
