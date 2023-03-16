import { Route, Routes } from "react-router-dom";
import Login from "../componets/auth/login/login";
import Home from "../pages/product";
import ProtectedRoute from "./protectedRoute";
import Product from "../pages/product";
import ProductForm from "../componets/products/productForm/productForm";

const RoutesFiles = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product-detail" element={<ProductForm />} />
      {/* <Route exact element={<ProtectedRoute />}>
        <Route path="/product" element={<Product />} />
      </Route> */}
    </Routes>
  );
};

export default RoutesFiles;
