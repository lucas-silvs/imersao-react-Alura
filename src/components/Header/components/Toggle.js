import { useState } from "react";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { setRequestMeta } from "next/dist/server/request-meta";
import config from "../../../../config.json";

function Toggle({ setTema }) {
  const [mode, setMode] = useState("light");

  return (
    <DarkModeToggle
      mode={mode}
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
        setMode(mode);
        if (mode === "dark") {
          console.log("fica gótico");
          setTema(config.temas.dark);
        } else {
          setTema(config.temas.light);
        }
      }}
    />
  );
}

export default Toggle;
