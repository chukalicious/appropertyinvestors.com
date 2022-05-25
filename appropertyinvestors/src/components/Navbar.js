import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Menu from "./Menu";
import Toolbar from "@mui/material/Toolbar";
import ActionButton from "./ActionButton";
import { titleBox, menuBox, HeaderBox, StyledBar } from "../styles/Header";

const Navbar = () => {
  return (
    <HeaderBox>
      <StyledBar position="sticky">
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
      </StyledBar>{" "}
    </HeaderBox>
  );
};

export default Navbar;
