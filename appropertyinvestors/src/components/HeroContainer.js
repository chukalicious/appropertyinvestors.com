import Box from "@mui/material/Box";
import { heroWrapper, heroBoxItems, heroItemDiv } from "../styles/HeroStyles";

const HeroContainer = () => {
  return (
    <Box sx={{ ...heroWrapper }}>
      <Box sx={{ ...heroBoxItems }}>
        <Box
          sx={{
            ...heroItemDiv,
            backgroundColor: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.primary.contrastText,
          }}
        >
          <p>item 1</p>
          <p>item 1</p>
          <p>item 1</p>
        </Box>
        <Box
          sx={{
            ...heroItemDiv,
            backgroundColor: (theme) => theme.palette.secondary.main,
            color: (theme) => theme.palette.secondary.contrastText,
          }}
        >
          <p>item 2</p>
          <p>item 2</p>
          <p>item 2</p>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroContainer;
