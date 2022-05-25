import { styled } from "@mui/material/styles";

// This component is a GRID, apply grid-type props
export const HeroWrapper = styled("div")(({ theme }) => ({
  // border: "hotpink solid 3px",
  height: "auto",
  display: "flex",
  flexDirection: "column-reverse",
  width: "100%",

  // medium screen
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const GridItemWrapper = styled("div")(({ theme }) => ({
  padding: "1.5rem",
  width: "100%",
  minHeight: "40vh",
  border: "yellow solid 2px",
}));

export const HeroH2 = styled("h2")(({ theme }) => ({
  pt: "1",
}));

export const HeroText = styled("p")(({ theme }) => ({
  marginTop: "6rem",
  border: "",
}));
