import { Box, Fab } from "@mui/material";
import * as React from "react";
import { Page } from "../../components/Page";
import AddIcon from '@mui/icons-material/Add';
import Table from "./Table";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CategoryList = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    setOpen(true)
  }, [id])

  return (
    <Page title="Listagem categorias">
      <Box dir='rtl'>
          <Fab
            title="Adicionar categoria"
            size="small"
            onClick={handleOpen}
          >
            <AddIcon />
          </Fab>
      </Box>
      <Box>
        <Table/>
      </Box>
      <Modal open={open} setOpen={setOpen}/>
    </Page>
  );
};

export default CategoryList;
