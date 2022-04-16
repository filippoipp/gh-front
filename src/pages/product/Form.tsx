import { Box, TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import categoryHttp from "../../util/http/category-http";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productHttp from "../../util/http/product-http";
import CurrencyFormat from 'react-currency-format';

interface FormProps {
  setOpen: any;
}

interface Category {
  id: string;
  name: string;
  createdAt: Date;
}

const Form = (props: FormProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [categories, setCategories] = useState([])

  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    categoryHttp.list().then(({data}) => setCategories(data))
    if (!id) {
      return;
    }
    productHttp.get(id).then((response) => reset(response.data))
  }, [])

  function onSubmit(formData: any) {
    const http = !id
      ? productHttp.create(formData)
      : productHttp.update(id, formData)
    http.then((response) => console.log(response))

    history('/products');
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
      <CurrencyFormat
        {...register('price', { required: 'Campo obrigatório' }) }
        customInput={TextField}
        thousandSeparator='.'
        decimalSeparator=','
        prefix="R$"
        fullWidth
        margin='normal'
        name="price"
        label="Preço"
        variant="outlined"
        decimalScale={2}
        InputLabelProps={{ shrink: true }}
      />
      {errors.price && errors.price.type === 'required' && (
        <p style={{color: 'red'}}>{errors.price.message}</p>) 
      }
      <FormControl fullWidth margin='normal'>
        <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
        <Select
          name="category"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          {categories.map((category: Category) => (
            <MenuItem value={category.id}>{category.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
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
