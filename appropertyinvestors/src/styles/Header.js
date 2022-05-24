import { styled } from "@mui/material/styles";

export const HeaderBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

export const StyledBar = styled("div")(({ theme }) => ({
  border: "green solid 5px",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    border: "pink solid 5px",
  },
}));

export const titleBox = {
  width: "60%",
  display: "flex",
  //   border: "red 1px solid",
};

export const menuBox = {
  display: "flex",
  width: "40%",
  //   border: "yellow solid 2px",
  justifyContent: "flex-end",
};

export const buttonWrapper = {
  border: "lightpink solid 1px",
};
