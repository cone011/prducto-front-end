import { useState, useContext, Fragment, useEffect, useCallback } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./productForm.module.css";
import { useLocation } from "react-router-dom";

const ProductForm = () => {
  const location = useLocation();
  const [productData, setProductData] = useState({});
  const cartCtx = useContext(CartContext);
  const [amount, setAmount] = useState(1);

  const assigmentValue = useCallback(() => {
    const product = {
      ...location.state.productObject,
      img: location.state.imgShow.url,
    };
    setProductData(product);
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
    cartCtx.addItem({
      id: productData.id,
      name: productData.title,
      amount: amount,
      price: productData.price,
    });
    console.log(cartCtx);
  };

  return (
    <Fragment>
      <div className={classes.Container}>
        <div className={classes.Card}>
          <div className={classes.Image}>
            <img src={`${productData.img}`} alt={`${productData.id}`} />
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
    </Fragment>
  );
};

export default ProductForm;
