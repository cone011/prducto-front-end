import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./productsItem.module.css";

const ProductsItem = (props) => {
  const cartCtx = useContext(CartContext);
  const { name, imgUrl, price, id } = props;
  const addToCartHandler = () => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: 1,
      price: price,
    });
  };
  return (
    <div className={classes.ProductItem}>
      <h3>{name}</h3>
      <img src={imgUrl} alt={name} />
      <span className={classes.Price}>${price}</span>
      <button onClick={addToCartHandler}>View More Info</button>
    </div>
  );
};

export default ProductsItem;
