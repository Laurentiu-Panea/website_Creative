import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  const [isTrue, setIsTrue] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    // when the menu button is clicked,
    // fire two click events: one on the menu button and one on the global window,
    // because the menu button click event propagates to the global window,
    // both click events are fired almost simultaneously.
    // e.stopPropagation() -- "stops" the click event from propagating to the global window so the menu remains open.
    setIsTrue(!isTrue);
  }
  //this useEffect is to make the (displayed) menu disappear when you click outside it, anywhere on the page
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
        {/* {here at the path "/Home" because I want this to be displayed in the url bar} */}
        <Link to="/Home">Home</Link>
        {/* {"a"-tag, refreshish before showing the page, do it for Html & Js one more time} */}
        {/* {<Link/> -It does NOT refresh but does client-side routing, instant transition} */}

        {/* <a href="/Home">Home</a> */}
        {/* <br />
        <Link to="/https://github.com/Laurentiu-Panea">GitHub Repo</Link>
        <a href="https://github.com/Laurentiu-Panea">GitHub Repo</a> */}
        <br />
        <Link to="/About">About</Link>
        {/* <a href="/About">About</a> */}
        <br />
        <Link to="/Coafor">Coafor</Link>
        {/* <a href="/Coafor">Coafor </a> */}
        <br />
        <Link to="/AppointmentForm">Programare</Link>
        <br />
        <Link to="/Manichiura">Manichiura</Link>
        <br />
        <Link to="/Cosmetica&MakeUp">Cosmetica</Link>
      </div>
    );
  }

  return (
    <>
      <h1 className="app">
        <button className="menu_button" onClick={handleClick}>
          {isTrue ? "✖" : "☰"}
        </button>
        {isTrue && <Menu />}
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <p>
            Creativ<span className="letter_rotation">E</span> Beauty Studio
          </p>
        </a>
        <Link className="logo_picture" to="/About"></Link>
        {/* <div className="logo_picture" alt=""></div> */}
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
          <Link className="header-link" to="/Cosmetica&MakeUp">
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
          <Link className="header-contact-link" to="/AppointmentForm">
            Programeaza-te!
          </Link>
        </div>
      </h1>
    </>
  );
}
