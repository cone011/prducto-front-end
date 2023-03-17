import { useState } from "react";
import classes from "./creditCard.module.css";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/es/styles-compiled.css";
import { Col, Form, Row } from "react-bootstrap";

const CreditCard = () => {
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
            <form>
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
                  id="cardNumber"
                  data-testid="cardNumber"
                  name="cardNumber"
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
                      name="expiration"
                      id="expiration"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
