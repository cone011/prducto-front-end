import classes from "./cartItem.module.css";

const CartItem = (props) => {
  const { price, amount, onAdd, onRemove } = props;
  const formatPrice = `${price.toFixed(2)}`;

  return (
    <li className={classes.cartItem}>
      <div className={classes.Summary}>
        <span className={classes.Price}>{formatPrice}</span>
        <span className={classes.Ammount}>x {amount}</span>
      </div>
      <div className={classes.cartItemButton}>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
