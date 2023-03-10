import { Fragment, useContext, useReducer } from "react";
import CartContext from "../../../store/cart-context";
import { defaultTodoReducer } from "../../../util/const";
import CustomModal from "../../UI/customModal/customModal";
import classes from "./productsItem.module.css";

const todoReducer = (curTodo, action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        ...curTodo,
        typeModal: action.typeModal,
        productObject: action.productObject,
        isShow: true,
      };
    case "END":
      return { ...curTodo, isShow: false };
    default:
      throw new Error("The action dont exist");
  }
};

const ProductsItem = (props) => {
  const cartCtx = useContext(CartContext);
  const [todo, dispatchTodo] = useReducer(todoReducer, defaultTodoReducer);
  const { name, imgUrl, price, id } = props;
  const addToCartHandler = () => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: 1,
      price: price,
    });
  };

  // const showDetail = () => {
  //   dispatchTodo({
  //     type: "SET_CART",
  //     typeModal: "DETAIL",
  //     productObject: { name, imgUrl, price, id },
  //   });
  // };

  const hideModal = () => {
    dispatchTodo({ type: "END" });
  };

  return (
    <Fragment>
      <div className={classes.ProductItem}>
        <h3>{name}</h3>
        <img src={imgUrl} alt={name} />
        <span className={classes.Price}>${price}</span>
        <button onClick={addToCartHandler}>View More Info</button>
      </div>
      {todo.isShow && (
        <CustomModal
          typeModal={todo.typeModal}
          onCloseModal={hideModal}
          productObject={todo.productObject}
        />
      )}
    </Fragment>
  );
};

export default ProductsItem;
