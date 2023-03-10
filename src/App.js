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
      <Route exact element={<ProtectedRoute />}>
        <Route path="/product" element={<Product />} />
      </Route>
      {/* <Route
        path="/private"
        element={
          <PrivateRoute>
            <Private />
          </PrivateRoute>
        }
      /> */}
    </Routes>
  );
  // const routes = useRoutes([
  //   {
  //     path: "/",
  //     element: <div>Hello Index</div>,
  //   },
  //   {
  //     path: "product",
  //     element: <Product />,
  //   },
  // ]);
  // return routes;
  // return (
  //   <Router>
  //     <div>
  //       <Routes>
  //         <Route path="/" element={Home} />
  //         <Route path="/login" element={Login} />
  //         <Route path="/signup" element={SignUp} />
  //         <Route
  //           path="/product"
  //           element={
  //             <ProtectedRoute>
  //               <Product />
  //             </ProtectedRoute>
  //           }
  //         />
  //       </Routes>
  //     </div>
  //   </Router>
  // );
}

export default App;
