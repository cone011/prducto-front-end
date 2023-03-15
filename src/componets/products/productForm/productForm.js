import {
  useEffect,
  useCallback,
  useState,
  useReducer,
  useContext,
  Fragment,
} from "react";
import CartContext from "../../../store/cart-context";
import classes from "./productForm.module.css";
import { useLocation } from "react-router-dom";
import { todoReducer } from "../../../context/reducer";
import { defaultTodoReducer } from "../../../util/const";
import { getProductoById } from "../../../api/productApi";
import CustomModal from "../../UI/customModal/customModal";

const ProductForm = () => {
  const location = useLocation();
  const cartCtx = useContext(CartContext);
  const [todo, dispatchTodo] = useReducer(todoReducer, defaultTodoReducer);
  const [amount, setAmount] = useState(1);

  const assigmentValue = useCallback(async () => {
    try {
      dispatchTodo({ type: "SET_LOADING", message: "FETCHING THE PRODUCT" });
      let idValue = location.state.id;
      let result = await getProductoById(idValue);
      console.log(result);
      dispatchTodo({ type: "SET_PRODUCT", productObject: result });
    } catch (err) {
      console.log(err);
    }
  }, [location]);

  useEffect(() => {
    assigmentValue();
  }, [assigmentValue]);

  const onChangeMinusAmount = () => {
    if (amount <= 1) {
      setAmount(1);
      return;
    }
    setAmount(amount - 1);
  };

  const onChangePlusAmount = () => {
    setAmount(amount + 1);
  };

  const addToCartHandler = () => {
    // cartCtx.addItem({
    //   id: id,
    //   name: name,
    //   amount: 1,
    //   price: price,
    // });
  };

  return (
    <Fragment>
      <div className={classes.Container}>
        <div className={classes.Card}>
          <div className={classes.Image}>
            <img
              src="http://http2.mlstatic.com/D_820151-MLA50232582674_062022-O.jpg"
              alt="MLA1145029073"
            />
          </div>
          <div className="text">
            <h5>{`Codigo: `}</h5>
            <div className={classes.Price}>
              <h3>$15.90</h3>
              <div className={classes.Quantity}>
                <svg
                  onClick={onChangeMinusAmount}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                </svg>
                <p>{amount}</p>
                <svg
                  onClick={onChangePlusAmount}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
                </svg>
              </div>
            </div>
            <div className={classes.Description}>
              <h5>Description</h5>
              <p>
                Estéreo Para Auto Smart Tech Jsd-520 Con Usb, Bluetooth Y Lector
                De Tarjeta Sd o productObject.Title
              </p>
            </div>
            <div className={classes.ButtonAddCart}>
              <button onClick={addToCartHandler}>Add to the cart</button>
            </div>
          </div>
        </div>
      </div>
      {todo.isLoading && (
        <CustomModal message={todo.message} typeModal={todo.typeModal} />
      )}
    </Fragment>
  );
};

export default ProductForm;
