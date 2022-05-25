import { styled } from "@mui/material/styles";

// This component is a GRID, apply grid-type props
export const HeroWrapper = styled("div")(({ theme }) => ({
  // border: "hotpink solid 1px",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  width: "100%",

  // medium screen
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const heroItemDiv = {
  p: 3,
  width: "100%",
  border: "yellow solid 2px",
};

export const GridItemWrapper = styled("div")(({ theme }) => ({
  padding: "1.5rem",
  width: "100%",
  border: "yellow solid 2px",
}));

// mediaqueries test

export const someDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));
