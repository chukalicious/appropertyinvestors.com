import "./App.css";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import HeroContainer from "./components/HeroContainer";

import { appStyles } from "./styles/AppStyles";

function App() {
  return (
    <Box sx={{ ...appStyles }}>
      <Navbar />
      <HeroContainer />
    </Box>
  );
}

export default App;
