import * as React from "react";
import { Modal as MuiModal, Box, Fade, Backdrop, Typography } from '@mui/material';
import Form from './Form';
import { useParams, useNavigate } from "react-router-dom";

type ModalProps = {
  open: boolean;
  setOpen: any;
  refreshKey: number;
  setRefreshKey: any;
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

const Modal = (props: ModalProps) => {
  const history = useNavigate();
  const handleClose = () => { props.setOpen(false); history('/categories') }
  const { id } = useParams();

  return (
    <MuiModal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={props.open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {!id ? 'Criar categoria' : 'Editar categoria'}
          </Typography>
          <Form setOpen={props.setOpen} refreshKey={props.refreshKey} setRefreshKey={props.setRefreshKey}/>
        </Box>
      </Fade>
    </MuiModal>
  );
};

export default Modal;
