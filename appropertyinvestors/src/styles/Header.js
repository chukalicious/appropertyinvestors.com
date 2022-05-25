import { styled } from "@mui/material/styles";

export const HeaderBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

export const StyledBar = styled("div")(({ theme }) => ({
  width: "100%",
}));

export const TitleBox = styled("div")(({ theme }) => ({
  width: "60%",
  display: "flex",
  border: "blue 2px solid",
  [theme.breakpoints.up("md")]: {
    width: "40%",
  },
}));

export const MenuBox = styled("div")(({ theme }) => ({
  display: "flex",
  width: "40%",
  border: "yellow solid 2px",
  [theme.breakpoints.up("md")]: {
    width: "60%",
  },
}));

export const buttonWrapper = {
  border: "lightpink solid 1px",
};
