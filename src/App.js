import "./App.css";
import { useReducer } from "react";
import RoutesFiles from "./routes/routes";
import CartProvider from "./store/CartProvider";
import Header from "./componets/UI/header/header";
import CartList from "./componets/cart/cartList/cartList";
import { defaultTodoReducer } from "./util/const";
import { todoReducer } from "./context/reducer";
import CustomModal from "./componets/UI/customModal/customModal";

function App() {
  const [todo, dispatchTodo] = useReducer(todoReducer, defaultTodoReducer);

  const showCartHandler = () => {
    dispatchTodo({ type: "SET_CART" });
  };

  const showConfirmHandler = () => {
    dispatchTodo({
      type: "SET_CONFIRM",
      cartIsShow: false,
      message: "The order was processed correctly",
    });
  };

  const hideModal = () => {
    dispatchTodo({ type: "END" });
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <RoutesFiles />
      {todo.cartIsShow && (
        <CartList onCloseModal={hideModal} onConfirmCart={showConfirmHandler} />
      )}
      {todo.isLoading && (
        <CustomModal typeModal={todo.typeModal} message={todo.message} />
      )}
      {todo.confirm && (
        <CustomModal
          onCloseModal={hideModal}
          message={todo.message}
          typeModal={todo.typeModal}
        />
      )}
    </CartProvider>
  );
}

export default App;

//i18n para cambiar de lengiaje
