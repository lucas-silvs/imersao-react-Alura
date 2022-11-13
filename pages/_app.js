import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, {
  ColorModeContext,
} from "../src/components/Menu/components/ColorModeProvider";

const temaAtual = {
  dark: {
    backgroundBase: "#181818",
    backgroundLevel1: "#202020",
    backgroundLevel2: "#313131",
    borderBase: "#383838",
    textColorBase: "#FFFFFF",
  },
  light: {
    backgroundBase: "#F9F9F9",
    backgroundLevel1: "#FFFFFF",
    backgroundLevel2: "#F0F0F0",
    borderBase: "#E5E5E5",
    textColorBase: "#222222",
  },
};

function ProviderWrapper(props) {
  return (
    <ColorModeProvider initialMode="light">{props.children}</ColorModeProvider>
  );
}

function MyApp({ Component, pageProps }) {
  const contexto = React.useContext(ColorModeContext);

  return (
    <ThemeProvider theme={temaAtual[contexto.mode]}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function _app(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  );
}
