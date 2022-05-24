import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Menu from "./Menu";
import Toolbar from "@mui/material/Toolbar";
import ActionButton from "./ActionButton";
import {
  headerStyles,
  titleBox,
  menuBox,
  barStyles,
  buttonWrapper,
} from "../styles/Header";

const Navbar = () => {
  return (
    <Box sx={{ ...headerStyles }}>
      <AppBar position="sticky" sx={{ ...barStyles }}>
        <Toolbar>
          <Box sx={{ ...titleBox }}>
            <Typography variant="body1" component="h1">
              A&P Property Investors
            </Typography>{" "}
          </Box>
          <Box sx={{ ...menuBox }}>
            <Menu />
          </Box>
          <ActionButton />
        </Toolbar>
      </AppBar>{" "}
    </Box>
  );
};

export default Navbar;
