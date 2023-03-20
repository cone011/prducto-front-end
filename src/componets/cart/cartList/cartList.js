import { useContext } from "react";
import classes from "./cartList.module.css";
import CartItem from "../cartItem/cartItem";
import CartContext from "../../../store/cart-context";
import ShowModal from "../../UI/showModal/showModal";

const CartList = (props) => {
  const { onCloseModal, onConfirmCart } = props;
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onSendCart = async () => {
    try {
      onConfirmCart();
    } catch (err) {
      console.log(err);
    }
  };

  const cartItems = (
    <ul className={classes.cartItems}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <ShowModal onClose={onCloseModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["buton--alt"]} onClick={onCloseModal}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={onSendCart}>
            Order
          </button>
        )}
      </div>
    </ShowModal>
  );
};

export default CartList;
