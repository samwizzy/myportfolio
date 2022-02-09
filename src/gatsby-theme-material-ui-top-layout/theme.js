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
});

export default theme;
