import { Box, Button } from "@mui/material";
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
  const [refreshKey, setRefreshKey] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }
    setOpen(true)
  }, [id])

  return (
    <Page title="Listagem de categorias">
      <Box dir='rtl' style={{marginBottom: '10px'}}>
          <Button
            variant='outlined'
            size='large'
            style={{backgroundColor: '#e41134', color: '#fbc004'}}
            onClick={handleOpen}
          >
            Adicionar <AddIcon />
          </Button>
      </Box>
      <Box>
        <Table refreshKey={refreshKey} setRefreshKey={setRefreshKey}/>
      </Box>
      <Modal open={open} setOpen={setOpen} refreshKey={refreshKey} setRefreshKey={setRefreshKey}/>
    </Page>
  );
};

export default CategoryList;
