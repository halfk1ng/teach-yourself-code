import React from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
