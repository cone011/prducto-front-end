import { useContext, useReducer } from "react";
import CartContext from "../../../store/cart-context";
import { defaultTodoReducer } from "../../../util/const";
import { getProductoById } from "../../../api/productApi";
import classes from "./productsItem.module.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

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

  const showDetail = async () => {
    let result = await getProductoById(id);
    dispatchTodo({
      type: "SET_CART",
      typeModal: "DETAIL",
      productObject: result,
    });
  };

  const hideModal = () => {
    dispatchTodo({ type: "END" });
  };

  return (
    <div className={classes.Products}>
      <Card>
        <Card.Img variant="top" src={imgUrl} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>$ {price}</span>
          </Card.Subtitle>
          <Button onClick={addToCartHandler}>View Product</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductsItem;
