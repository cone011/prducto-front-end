import { useReducer } from "react";
import CartContext from "./cart-context";
import { cartReducer } from "../context/reducer";
import { defaultCartSate } from "../util/const";

const CartProvider = (props) => {
  const { children } = props;
  const [carState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartSate
  );

  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartState({ type: "CELAR" });
  };

  const cartContext = {
    items: carState.items,
    totalAmount: carState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
