import { Route, Routes } from "react-router-dom";
import Login from "../componets/auth/login/login";
import SignUp from "../componets/auth/signup/signup";
import Home from "../pages/product";
import ProtectedRoute from "./protectedRoute";
import Product from "../pages/product";

const RoutesFiles = () => {
  return (
    <Routes>
      <Route path="/" element={Home} />
      <Route path="/login" element={Login} />
      <Route path="/signup" element={SignUp} />
      <Route path="/product" element={Product} />
      {/* <Route
        path="/product"
        element={
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  );
};

export default RoutesFiles;
