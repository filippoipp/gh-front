import * as React from "react";
import { Routes, Route } from "react-router-dom";
import CategoryList from "../pages/category/PageList";
import Dashboard from "../pages/Dashboard";
import ProductList from "../pages/product/PageList";

type Props = {};
export const AppRouter: React.FC = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/categories" element={<CategoryList />} />
      <Route path="/categories/edit/:id" element={<CategoryList />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/edit/:id" element={<ProductList />} />
    </Routes>
  );
};
