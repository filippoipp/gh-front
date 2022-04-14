import { Box, Fab } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { Page } from "../../components/Page";
import AddIcon from '@mui/icons-material/Add';
import Table from "./Table";

const CategoryList = () => {
  return (
    <Page title="Listagem categorias">
      <Box dir='rtl'>
          <Fab
            title="Adicionar categoria"
            size="small"
            component={Link}
            to="/categories/create"
          >
            <AddIcon />
          </Fab>
      </Box>
      <Box>
        <Table/>
      </Box>
    </Page>
  );
};

export default CategoryList;
