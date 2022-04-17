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
import ModalExport from "./ModalExport";
import ModalImport from "./ModalImport";

const CategoryList = () => {
  const [open, setOpen] = useState(false);
  const [openExport, setOpenExport] = useState(false);
  const [openImport, setOpenImport] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenExport = () => setOpenExport(true);
  const handleOpenImport = () => setOpenImport(true);
  const [refreshKey, setRefreshKey] = useState(0);

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
            onClick={handleOpenImport}
          >
            Importar <FileUploadIcon />
          </Button>
          <Button
            variant='outlined'
            size='large'
            style={{backgroundColor: '#e41134', color: '#fbc004', marginRight: '5px'}}
            onClick={handleOpenExport}
          >
            Exportar <FileDownloadIcon />
          </Button>
      </Box>
      <Box>
        <Table refreshKey={refreshKey} setRefreshKey={setRefreshKey}/>
      </Box>
      <Modal open={open} setOpen={setOpen} refreshKey={refreshKey} setRefreshKey={setRefreshKey}/>
      <ModalExport openExport={openExport} setOpenExport={setOpenExport} ></ModalExport>
      <ModalImport openImport={openImport} setOpenImport={setOpenImport} refreshKey={refreshKey} setRefreshKey={setRefreshKey}></ModalImport>
    </Page>
  );
};

export default CategoryList;
