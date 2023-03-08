import logo from "./logo.svg";
import "./App.css";
import { getSearchProducto } from "./api/productApi";
import ProductList from "./componets/products/productsList/productsList";
import CartProvider from "./store/CartProvider";
import CartList from "./componets/cart/cartList/cartList";
import { useState } from "react";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  const onObtainData = async () => {
    let result = await getSearchProducto("rtx 3080");
    console.log(result);
  };

  return (
    <CartProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={onObtainData} type="button">
            Obtener datos
          </button>
          <ProductList />
        </header>
      </div>
      <button onClick={showCartHandler}>Mostar Carrito</button>
      {cartIsShow && <CartList onCloseModal={hideCartHandler} />}
    </CartProvider>
  );
}

export default App;
