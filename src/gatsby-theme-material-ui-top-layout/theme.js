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
      light: "#ffa733",
      main: "#ff9100",
      dark: "#b26500",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Montserrat", "sans-serif"].join(","),
  },
});

export default theme;
