import { Box, TextField, Button, MenuItem } from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import categoryHttp from "../../util/http/category-http";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productHttp from "../../util/http/product-http";

interface FormProps {
  setOpenExport: any;
}

interface Category {
  id: string;
  name: string;
  createdAt: Date;
}

interface Product {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  createdAt: Date;
  category: {
    id: string;
    name: string;
    createdAt: Date;
  }
}

const ExportForm = (props: FormProps) => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const history = useNavigate();

  useEffect(() => {
    categoryHttp.list().then(({data}) => setCategories(data))
    productHttp.list().then(({data}) => setProducts(data))
  }, [])

  function handleFilterdProducts(event: any) {
    const filtered = products.filter((product: Product) => product.categoryId === event.target.value)
    setFilteredProducts(filtered);
    console.log(filtered)
  }

  function onSubmit() {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(filteredProducts)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "products.json";
    link.click();

    history('/products');
    props.setOpenExport(false)
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
        onChange={handleFilterdProducts}
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
          Exportar
        </Button>
      </Box>
    </form>
  );
};

export default ExportForm;
