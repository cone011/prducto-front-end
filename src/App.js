import "./App.css";
import { useReducer } from "react";
import { defaultTodoReducer } from "./util/const";
import { todoReducer } from "./context/reducer";
import { useNavigate } from "react-router-dom";
import RoutesFiles from "./routes/routes";
import CartProvider from "./store/CartProvider";
import Header from "./componets/UI/header/header";
import CartList from "./componets/cart/cartList/cartList";
import CustomModal from "./componets/UI/customModal/customModal";

function App() {
  const [todo, dispatchTodo] = useReducer(todoReducer, defaultTodoReducer);
  const navigate = useNavigate();
  const showCartHandler = () => {
    dispatchTodo({ type: "SET_CART" });
  };

  const showConfirmHandler = () => {
    dispatchTodo({ type: "SET_PAYMENT" });
  };

  const showConfirmPaymentHandler = () => {
    dispatchTodo({
      type: "SET_CONFIRM",
      message: "The payment was processed correctly",
    });
  };

  const hideModal = () => {
    dispatchTodo({ type: "END" });
    if (todo.typeModal === "CONFIRM") navigate("/product");
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
      {todo.isPayment && (
        <CustomModal
          typeModal={todo.typeModal}
          onCloseModal={hideModal}
          onConfirmPayment={showConfirmPaymentHandler}
        />
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
