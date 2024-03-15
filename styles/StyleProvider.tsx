"use client";

import GlobalStyles from "./GlobalStyles";
import theme from "./theme";
import React from "react";
import { ThemeProvider } from "styled-components";

export default function StyleProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
