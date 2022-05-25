import Box from "@mui/material/Box";
import { HeroWrapper, GridItemWrapper } from "../styles/HeroStyles";

const HeroContainer = () => {
  return (
    <Box>
      <HeroWrapper container spacing={1}>
        <GridItemWrapper
          item
          md={6}
          xs={12}
          sx={{
            backgroundColor: "primary.main",
            color: "primary.contrastText",
          }}
        >
          <p>item 1</p>
          <p>item 1</p>
          <p>item 1</p>
        </GridItemWrapper>
        <GridItemWrapper
          item
          md={6}
          xs={12}
          sx={{
            backgroundColor: "secondary.main",
            color: "secondary.contrastText",
          }}
        >
          <p>item 2</p>
          <p>item 2</p>
          <p>item 2</p>
        </GridItemWrapper>
      </HeroWrapper>
    </Box>
  );
};

export default HeroContainer;
