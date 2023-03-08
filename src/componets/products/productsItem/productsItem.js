import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./productsItem.module.css";

const ProductsItem = (props) => {
  const cartCtx = useContext(CartContext);
  const { name, imgUrl, price, key } = props;
  const addToCartHandler = () => {
    console.log(price);
    cartCtx.addItem({
      id: Math.random(),
      name: name,
      amoumnt: 1,
      price: price,
    });
    console.log(cartCtx);
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
