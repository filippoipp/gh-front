import * as React from "react";
import { Routes, Route } from "react-router-dom";
import CategoryList from "../pages/category/List";
import Dashboard from "../pages/Dashboard";
import ProductList from "../pages/product/List";

type Props = {};
export const AppRouter: React.FC = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/categories" element={<CategoryList />} />
      <Route path="/products" element={<ProductList />} />
    </Routes>
  );
};
