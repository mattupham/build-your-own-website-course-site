import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    white: "#ffffff",
    offWhite: "#ededed",
    black: "#000000",
    darkGrey: "#0f0f0f",
    lightGrey: "#b6b6b6",
    grey: "#666",
    orange: "#fc6910",
    aqua: "#43AED9",
    blue: "#187fd9",
    darkBlue: "#2E6EA6",
    night: "#111826",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
