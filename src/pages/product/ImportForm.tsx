import { Box, TextField, Button, MenuItem } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import categoryHttp from "../../util/http/category-http";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productHttp from "../../util/http/product-http";

interface FormProps {
  setOpenImport: any;
}

interface Category {
  id: string;
  name: string;
  createdAt: Date;
}

const ImportForm = (props: FormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [categories, setCategories] = useState([])

  const history = useNavigate();

  useEffect(() => {
    categoryHttp.list().then(({data}) => setCategories(data))
  }, [])

  function onSubmit(data: any) {
    const formData = new FormData();
    formData.append('file', data.file[0])
    formData.append('categoryId', data.categoryId)
    productHttp.import(formData).then((response) => console.log(response))
    history('/products');
    props.setOpenImport(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <TextField
        {...register('file', { required: 'Campo obrigatório' }) }
        type='file'
        name="file"
        label='Arquivo'
        fullWidth
        margin='normal'
        InputLabelProps={{ shrink: true }}
      >
      </TextField>
      {errors.file && errors.file.type === 'required' && (
        <p style={{color: 'red'}}>{errors.file.message}</p>) 
      }
      <Box dir="rtl">
        <Button
          variant='outlined'
          size='medium'
          style={{backgroundColor: '#e41134', color: '#fbc004'}}
          type='submit'
        >
          Importar
        </Button>
      </Box>
    </form>
  );
};

export default ImportForm;
