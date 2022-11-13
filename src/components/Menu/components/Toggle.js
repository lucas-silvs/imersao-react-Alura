import React, { useState } from "react";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { ColorModeContext } from "./ColorModeProvider";

function Toggle() {
  const contexto = React.useContext(ColorModeContext);
  const [mode, setMode] = useState(contexto.mode);

  return (
    <DarkModeToggle
      mode={contexto.mode}
      dark="Escuro"
      light="Claro"
      size="sm"
      inactiveTrackColor="#e2e8f0"
      inactiveTrackColorOnHover="#f8fafc"
      inactiveTrackColorOnActive="#cbd5e1"
      activeTrackColor="#334155"
      activeTrackColorOnHover="#1e293b"
      activeTrackColorOnActive="#0f172a"
      inactiveThumbColor="#1e293b"
      activeThumbColor="#e2e8f0"
      onChange={(mode) => {
        contexto.setMode(mode);
      }}
    />
  );
}

export default Toggle;
