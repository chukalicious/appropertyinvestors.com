import { useState } from "react";
import Box from "@mui/material/Box";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import { MenuBar } from "../styles/StyledMenu";
import { MenuIcon } from "../styles/Header";
const NavMenu = () => {
  const open = Boolean();

  const openMenu = () => {};

  return (
    <>
      <MenuBar>
        <MenuIcon>
          <MenuSharpIcon
          // onClick={() => {}}
          ></MenuSharpIcon>
        </MenuIcon>
        <MenuList sx={{ display: "flex", border: "lightpink 3px solid" }}>
          <MenuItem sx={{ width: "33%" }}>Home</MenuItem>
          <MenuItem sx={{ width: "33%" }}>About</MenuItem>
          <MenuItem sx={{ width: "33%" }}>Contact</MenuItem>
        </MenuList>
      </MenuBar>
    </>
  );
};

export default NavMenu;
