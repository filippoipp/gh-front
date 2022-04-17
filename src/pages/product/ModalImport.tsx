import * as React from "react";
import { Modal as MuiModal, Box, Fade, Backdrop, Typography } from '@mui/material';
import ImportForm from './ImportForm';
import { useNavigate } from "react-router-dom";

type ModalProps = {
  openImport: boolean;
  setOpenImport: any;
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

const ModalImport = (props: ModalProps) => {
  const history = useNavigate();
  const handleClose = () => { props.setOpenImport(false); history('/products') }

  return (
    <MuiModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.openImport}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.openImport}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Importar produtos para uma categoria
          </Typography>
          <ImportForm setOpenImport={props.setOpenImport}/>
        </Box>
      </Fade>
    </MuiModal>
  );
};

export default ModalImport;
