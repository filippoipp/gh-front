import * as React from "react";
import { Modal as MuiModal, Box, Fade, Backdrop, Typography } from '@mui/material';
import ExportForm from './ExportForm';
import { useParams, useNavigate } from "react-router-dom";

type ModalProps = {
  openExport: boolean;
  setOpenExport: any;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #e41134',
  boxShadow: 24,
  p: 4,
};

const ModalExport = (props: ModalProps) => {
  const history = useNavigate();
  const handleClose = () => { props.setOpenExport(false); history('/products') }
  const { id } = useParams();

  return (
    <MuiModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.openExport}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.openExport}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Exportar produtos de uma categoria
          </Typography>
          <ExportForm setOpenExport={props.setOpenExport}/>
        </Box>
      </Fade>
    </MuiModal>
  );
};

export default ModalExport;
