import { Box, Button } from "@mui/material";
import * as React from "react";
import { Page } from "../../components/Page";
import AddIcon from '@mui/icons-material/Add';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
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
    <Page title="Listagem de produtos">
      <Box dir='rtl' style={{marginBottom: '10px'}}>
          <Button
            variant='outlined'
            size='large'
            style={{backgroundColor: '#e41134', color: '#fbc004'}}
            onClick={handleOpen}
          >
            Adicionar <AddIcon />
          </Button>
          <Button
            variant='outlined'
            size='large'
            style={{backgroundColor: '#e41134', color: '#fbc004', marginRight: '5px'}}
            onClick={handleOpen}
          >
            Importar <FileUploadIcon />
          </Button>
          <Button
            variant='outlined'
            size='large'
            style={{backgroundColor: '#e41134', color: '#fbc004', marginRight: '5px'}}
            onClick={handleOpen}
          >
            Exportar <FileDownloadIcon />
          </Button>
      </Box>
      <Box>
        <Table/>
      </Box>
      <Modal open={open} setOpen={setOpen}/>
    </Page>
  );
};

export default CategoryList;
