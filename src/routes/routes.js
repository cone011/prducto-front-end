import { Route, Routes } from "react-router-dom";
import Login from "../componets/auth/login/login";
import Home from "../pages/Home/home";
import ProtectedRoute from "./protectedRoute";
import Product from "../pages/product/product";
import ProductForm from "../componets/products/productForm/productForm";
import CreditCard from "../componets/creditCard/creditCard";

const RoutesFiles = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route exact element={<ProtectedRoute />}>
        <Route path="/product" element={<Product />} />
        <Route path="/product-detail" element={<ProductForm />} />
        <Route path="/credit-card" element={<CreditCard />} />
      </Route>
    </Routes>
  );
};

export default RoutesFiles;
