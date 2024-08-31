"use client";
import { createTheme, Shadows } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0062FF",
    },
  },
  shadows: [
    "none",
    "2px 2px 4px 3px rgba(0, 0, 0, 0.25)",
    ...Array(23).fill("none"),
  ] as Shadows,
  shape: {
    borderRadius: 25,
  },
  breakpoints: {
    values: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xs: 1536,
    },
  },
});

export default theme;
