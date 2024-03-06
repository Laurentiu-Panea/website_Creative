import React from "react";
import { useState } from "react";
import BaraProgramare from "./BaraProgramare";
import Logo from "./Logo";
import FormularProgramare from "./FormularProgramare";

export default function App() {
  const [formularDeschis, setFormularDeschis] = useState(false);
  return (
    <div>
      <Logo />
      <BaraProgramare
        seteazaStareFormular={setFormularDeschis}
        stareFormulare={formularDeschis}
      />
      {formularDeschis && <FormularProgramare />}
    </div>
  );
}
