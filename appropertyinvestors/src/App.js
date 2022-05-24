import "./App.css";
import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";

import { appStyles } from "./styles/AppStyles";

function App() {
  return (
    <Box sx={{ ...appStyles }}>
      <Navbar />
    </Box>
  );
}

export default App;
