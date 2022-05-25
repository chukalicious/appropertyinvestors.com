import { styled } from "@mui/material/styles";

export const MenuBar = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
    marginLeft: "auto",
    border: "green 3px solid ",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    width: "50%",
  },
}));
