import * as React from "react";
import { Modal as MuiModal, Box, Fade, Backdrop } from '@mui/material';
import Form from './Form';

type ModalProps = {
  open: boolean;
  setOpen: any;
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
  const handleClose = () => props.setOpen(false);

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
          <Form />
        </Box>
      </Fade>
    </MuiModal>
  );
};

export default Modal;
