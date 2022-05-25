import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import ActionButton from "./ActionButton";
import NavMenu from "./NavMenu";
import { HeaderBox, StyledBar, MenuBox, TitleBox } from "../styles/Header";

const Navbar = () => {
  return (
    <HeaderBox>
      <StyledBar position="sticky">
        <Toolbar>
          <TitleBox>
            <Typography noWrap variant="body1" component="h1">
              A&P Property Investors
            </Typography>{" "}
          </TitleBox>
          <MenuBox>
            <NavMenu />
          </MenuBox>
          <ActionButton />
        </Toolbar>
      </StyledBar>{" "}
    </HeaderBox>
  );
};

export default Navbar;
