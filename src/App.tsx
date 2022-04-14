import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter } from "react-router-dom";
//import './App.css';
import { Navbar } from "./components/Navbar";
import { AppRouter } from "./routes/AppRouter";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Box paddingTop='80px'>
          <AppRouter />
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
