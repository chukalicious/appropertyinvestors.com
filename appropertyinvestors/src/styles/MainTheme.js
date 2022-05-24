import { createTheme } from "@mui/material/styles";
export const MainTheme = createTheme({
  palette: {
    primary: {
      main: "#28292e",
      contrastText: "#eaebea",
    },
    secondary: {
      main: "#eaebea",
      contrastText: "#28292f",
    },
  },

  typography: {
    fontSize: 16,
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1500,
    },
  },
});
