import React from "react";
import { useState } from "react";
import BaraProgramare from "./BaraProgramare";
import Logo from "./Logo";
import FormularProgramare from "./FormularProgramare";
import Home from "./Home";
import About from "./About";
import Contact from "./Coafor";
import {
  createBrowserRouter,
  BrowserRouter,
  Route,
  Router,
  Routes,
  Navigate,
} from "react-router-dom"; // Schimbați aici

export default function App() {
  const [formularDeschis, setFormularDeschis] = useState(false);

  return (
    //metoda veche,care nu sustine data Fetching from API's
    // <BrowserRouter>
    //   <div>
    //     <Logo />
    //     <Routes>
    //       <Route path="/home" element={<Home />} exact />
    //       <Route path="/formular-programare" element={<FormularProgramare />} />
    //       <Route path="/bara-programare" element={<BaraProgramare />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />

    //       <Route path="/" element={<Navigate to="/home" />} />
    //     </Routes>
    //     {/* Alte componente sau elemente aici */}
    //   </div>
    // </BrowserRouter>

    // metoda noua
    <>
      <Logo />
      <Home />
    </>
  );
}
