import Box from "@mui/material/Box";
import { heroWrapper, heroBoxItems } from "../styles/HeroStyles";

const HeroContainer = () => {
  return (
    <Box sx={{ ...heroWrapper }}>
      <Box sx={{ ...heroBoxItems }}>
        <Box
          sx={{
            p: 3,
            backgroundColor: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.primary.contrastText,
            // border: "red solid 2px",
          }}
        >
          <p>item 1</p>
          <p>item 1</p>
          <p>item 1</p>
        </Box>
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            p: 3,
            width: "100%",
            color: (theme) => theme.palette.secondary.contrastText,
            // border: "red solid 2px",
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
