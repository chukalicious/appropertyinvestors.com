import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Menu from "./Menu";
import { headerStyles, titleBox, menuBox } from "../styles/Header";

const Navbar = () => {
  return (
    <Box sx={{ ...headerStyles }}>
      {/* this is the header containing box */}
      <AppBar sx={{ ...headerStyles }}>
        <Box sx={{ ...titleBox }}>
          {/* this box will contain the title text */}
          <Typography>This is header</Typography>{" "}
        </Box>
        <Box sx={{ ...menuBox }}>
          <Menu />
          {/* This box will contain the menu */}
        </Box>
      </AppBar>{" "}
    </Box>
  );
};

export default Navbar;
