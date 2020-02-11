import React from "react";
import { ThemeProvider, Styled } from "theme-ui";
import theme from "../Styles/theme";
require("dotenv").config();

export default function MyApp({ Component, pageProps }) {
  console.log(process.env);
  return (
    <ThemeProvider theme={theme}>
      <Styled.root>
        <Component {...pageProps} />
      </Styled.root>
    </ThemeProvider>
  );
}
