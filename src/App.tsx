import { Box } from "@mui/material";
import React from "react";
//import './App.css';
import { Navbar } from "./components/Navbar";
import { Page } from "./components/Page";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box paddingTop='80px'>
        <Page title={'Categorias'}>
          Conteudo
        </Page>
      </Box>
    </>
  );
}

export default App;
