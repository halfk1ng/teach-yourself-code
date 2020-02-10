import React from "react";
import { ThemeProvider, Styled } from "theme-ui";
import theme from "../Styles/theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Styled.root>
        <Component {...pageProps} />
      </Styled.root>
    </ThemeProvider>
  );
}
