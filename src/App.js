import "./App.css";
import CartProvider from "./store/CartProvider";
import CartList from "./componets/cart/cartList/cartList";
import { useState } from "react";
import Header from "./componets/UI/header/header";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

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
    </CartProvider>
  );
}

export default App;
