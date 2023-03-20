import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import { Button, Col, Form, Row } from "react-bootstrap";
import { savePayment } from "../../api/paymentApi";
import { insertOrder } from "../../api/orderApi";
import classes from "./creditCard.module.css";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/es/styles-compiled.css";

const CreditCard = (props) => {
  const cartCtx = useContext(CartContext);
  const { onConfirmPayment } = props;
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const onSubmitPaymentHandler = async (event) => {
    event.preventDefault();
    try {
      let resultCart = await insertOrder({
        items: cartCtx.items,
        totalAmount: cartCtx.totalAmount,
      });
      let result = await savePayment({
        ...state,
        totalAmount: cartCtx.totalAmount,
      });
      if (result && resultCart) {
        cartCtx.clearCart();
        onConfirmPayment();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className={classes.Conteiner}>
        <div className={classes.Box}>
          <div className={classes.FormDiv}>
            <div className={classes.CreditCard}>
              <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
              />
            </div>
            <form onSubmit={onSubmitPaymentHandler}>
              <Form.Group>
                <label htmlFor="name">Name</label>
                <Form.Control
                  type="text"
                  className="form-control"
                  name="name"
                  value={state.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </Form.Group>
              <Form.Group>
                <label htmlFor="number">Card Number</label>
                <Form.Control
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Card Number"
                  value={state.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group>
                    <label htmlFor="Expiration">Expiration</label>
                    <Form.Control
                      type="text"
                      name="expiry"
                      id="expiry"
                      placeholder="Expiration"
                      value={state.expiry}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <label htmlFor="cvc">CVC</label>
                    <Form.Control
                      type="text"
                      id="cvc"
                      name="cvc"
                      placeholder="CVC"
                      value={state.cvc}
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                className={classes.ButtonSubmit}
                size="lg"
                id="submitButton"
                type="submit"
              >
                Payment
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
