import { Box, TextField, Button } from "@mui/material";
import * as React from "react";

const Form = () => {
  return (
    <form>
      <TextField
        name="name"
        label="Nome"
        variant="outlined"
        fullWidth
        margin='normal'
      />
      <Box dir="rtl">
        <Button
          variant='outlined'
          size='medium'
          type="submit"
          style={{backgroundColor: '#e41134', color: '#fbc004'}}
        >
          Salvar
        </Button>
      </Box>
    </form>
  );
};

export default Form;
