import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Menu from "./Menu";
import Toolbar from "@mui/material/Toolbar";
import { headerStyles, titleBox, menuBox, barStyles } from "../styles/Header";

const Navbar = () => {
  return (
    <Box sx={{ ...headerStyles }}>
      {/* this is the header containing box */}
      <AppBar sx={{ ...barStyles }}>
        <Toolbar>
          <Box sx={{ ...titleBox }}>
            {/* this box will contain the title text */}
            <Typography>A&P Property Investors</Typography>{" "}
          </Box>
          <Box sx={{ ...menuBox }}>
            <Menu />
            {/* This box will contain the menu */}
          </Box>
        </Toolbar>
      </AppBar>{" "}
    </Box>
  );
};

export default Navbar;
