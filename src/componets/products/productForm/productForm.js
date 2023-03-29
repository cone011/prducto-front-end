import {
  useState,
  useContext,
  Fragment,
  useEffect,
  useCallback,
  useReducer,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomModal from "../../UI/customModal/customModal";
import { todoReducer } from "../../../context/reducer";
import { defaultTodoReducer } from "../../../util/const";
import CartContext from "../../../store/cart-context";
import classes from "./productForm.module.css";

const ProductForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [productData, setProductData] = useState({});
  const [todo, dispatchTodo] = useReducer(todoReducer, defaultTodoReducer);
  const cartCtx = useContext(CartContext);
  const [amount, setAmount] = useState(1);

  const assigmentValue = useCallback(() => {
    const { item, picture } = location.state.productObject;
    setProductData({ ...item, picture });
  }, [location]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
    cartCtx.addItem({
      id: productData.id,
      name: productData.title,
      amount: amount,
      price: productData.price,
    });
    dispatchTodo({
      type: "SET_CONFIRM",
      message: "The product was add to the cart corretly",
    });
  };

  const hideModal = () => {
    dispatchTodo({ type: "END" });
    navigate("/product");
  };

  return (
    <Fragment>
      <div className={classes.Container}>
        <div className={classes.Card}>
          <div className={classes.Image}>
            <img src={`${productData.picture}`} alt={`${productData.id}`} />
          </div>
          <div className="text">
            <h5>{`Codigo: ${productData.id}`}</h5>
            <div className={classes.Price}>
              <h3>$ {productData.price}</h3>
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
              <p>{productData.title}</p>
            </div>
            <div className={classes.ButtonAddCart}>
              <button onClick={addToCartHandler}>Add to the cart</button>
            </div>
          </div>
        </div>
      </div>
      {todo.confirm && (
        <CustomModal
          onCloseModal={hideModal}
          message={todo.message}
          typeModal={todo.typeModal}
        />
      )}
    </Fragment>
  );
};

export default ProductForm;
