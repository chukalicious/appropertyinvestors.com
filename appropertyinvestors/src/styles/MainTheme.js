import { createTheme } from "@mui/material/styles";
export const MainTheme = createTheme({
  breakpoints: {
    values: {
      md: 600,
      lg: 1200,
      xl: 1500,
    },
  },
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
});
