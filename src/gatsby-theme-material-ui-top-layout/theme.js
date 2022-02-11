import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#a85bee",
      main: "#9333EA",
      dark: "#6623a3",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff35ff",
      main: "#FF03FF",
      dark: "#b202b2",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "system-ui",
      "Quicksand",
      "Roboto",
      "Montserrat",
      "sans-serif",
    ].join(","),
  },
  shadows: [
    "none",
    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    ...Array(20).fill("none"),
  ],
});

export default theme;
