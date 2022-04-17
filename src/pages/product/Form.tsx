import { Box, TextField, Button, MenuItem, FormControl } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import categoryHttp from "../../util/http/category-http";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productHttp from "../../util/http/product-http";
import CurrencyFormat from 'react-currency-format';

interface FormProps {
  setOpen: any;
  refreshKey: number;
  setRefreshKey: any;
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
    formData = {...formData, price: formData.price.replace(/\D/g, "")}
    const http = !id
      ? productHttp.create(formData)
      : productHttp.update(id, formData)
    http.then((response) => console.log(response))

    history('/products');
    props.setOpen(false)
    props.setRefreshKey((oldKey: any) => oldKey +1)
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
      <FormControl fullWidth margin='normal' {...register('price', { required: 'Campo obrigatório' }) }>
        <CurrencyFormat
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
      </FormControl>
      {errors.price && errors.price.type === 'required' && (
        <p style={{color: 'red'}}>{errors.price.message}</p>) 
      }
      <TextField
        {...register('categoryId', { required: 'Campo obrigatório' }) }
        select
        name="categoryId"
        label='Categoria'
        fullWidth
        margin='normal'
        InputLabelProps={{ shrink: true }}
      >
        {categories.map((category: Category) => (
          <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
        ))}
      </TextField>
      {errors.categoryId && errors.categoryId.type === 'required' && (
        <p style={{color: 'red'}}>{errors.categoryId.message}</p>) 
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
