import { Box, TextField, Button } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import categoryHttp from "../../util/http/category-http";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface FormProps {
  setOpen: any;
}


const Form = (props: FormProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    if (!id) {
      return;
    }
    categoryHttp.get(id).then((response) => reset(response.data))
  }, [])

  function onSubmit(formData: any) {
    const http = !id
      ? categoryHttp.create(formData)
      : categoryHttp.update(id, formData)
    http.then((response) => console.log(response))

    history('/categories');
    props.setOpen(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('name', { required: 'Campo obrigatório' }) }
        name="name"
        label="Nome"
        variant="outlined"
        fullWidth
        margin='normal'
        InputLabelProps={{ shrink: true }}
      />
      {errors.name && errors.name.type === 'required' && (
        <p style={{color: 'red'}}>{errors.name.message}</p>) 
      }
      <Box dir="rtl">
        <Button
          variant='outlined'
          size='medium'
          style={{backgroundColor: '#e41134', color: '#fbc004'}}
          type='submit'
        >
          Salvar
        </Button>
      </Box>
    </form>
  );
};

export default Form;
