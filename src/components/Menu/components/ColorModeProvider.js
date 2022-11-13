import React from "react";

export const ColorModeContext = React.createContext({
  mode: "",
  setMode: () => {
    alert("contexto atual: " + mode);
  },
});

function ColorModeProvider({ children, initialMode }) {
  const [mode, setMode] = React.useState(initialMode);

  return (
    <ColorModeContext.Provider value={{ mode: mode, setMode: setMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}

export default ColorModeProvider;
