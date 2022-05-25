import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImageListItem from "@mui/material/ImageListItem";
import {
  HeroWrapper,
  GridItemWrapper,
  HeroH2,
  HeroText,
} from "../styles/HeroStyles";
import modernMultilevel from "../images/modernMultilevel.jpeg";

const HeroContainer = () => {
  return (
    <Box>
      <HeroWrapper container spacing={1}>
        <GridItemWrapper
          item
          md={6}
          xs={12}
          sx={{
            backgroundColor: "secondary.main",
          }}
        >
          <HeroH2 variant="h6" component="h2">
            We are property investors working to solve central Florida's
            comminities housing challenges
          </HeroH2>
          <HeroText variant="body1" component="subtitle1">
            Coming soon to Georgia and North Carolina
          </HeroText>
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
          <ImageListItem>
            <img src={modernMultilevel} />
          </ImageListItem>
        </GridItemWrapper>
      </HeroWrapper>
    </Box>
  );
};

export default HeroContainer;
