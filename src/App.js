import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./componets/auth/login/login";
import Home from "./pages/home";
import ProtectedRoute from "./routes/protectedRoute";
import Product from "./pages/product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
      {/* <Route exact element={<ProtectedRoute />}>
        <Route path="/product" element={<Product />} />
      </Route> */}
    </Routes>
  );
}

export default App;
