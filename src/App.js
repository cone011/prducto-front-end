import { useCallback, useEffect, useState } from "react";
import "./App.css";
import CartProvider from "./store/CartProvider";
import CartList from "./componets/cart/cartList/cartList";
import Header from "./componets/UI/header/header";
import { getProductoCategory } from "./api/productApi";
import ProductList from "./componets/products/productsList/productsList";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const [listProduct, setListProduct] = useState([]);
  const assigmentData = useCallback(async () => {
    try {
      let result = await getProductoCategory("MLA5725");
      console.log(result);
      setListProduct(result.results);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    assigmentData();
  }, [assigmentData]);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {cartIsShow && <CartList onCloseModal={hideCartHandler} />}
      <ProductList listProduct={listProduct} />
    </CartProvider>
  );
}

export default App;
