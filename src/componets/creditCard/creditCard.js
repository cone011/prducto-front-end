import classes from "./creditCard.module.css";
import Cards from "react-credit-cards-2";
import { Col, Form, Row } from "react-bootstrap";

const CreditCard = (props) => {
  const { values } = props;
  return (
    <div>
      <div className={classes.Conteiner}>
        <div className={classes.Box}>
          <div className={classes.FormDiv}>
            <div className={classes.CreditCard}>
              <Cards
                cvc={values.cardSecurityCode}
                expiry={values.cardExpiration}
                focused={values.focus}
                name={values.cardName}
                number={values.cardNumber}
              />
            </div>
            <Form>
              <Form.Group>
                <Form.Control
                  type="text"
                  id="cardName"
                  name="cardName"
                  placeholder="Cardholder Name"
                  value={values.cardName}
                />
                <Form.Control
                  type="number"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={values.cardNumber}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      name="cardType"
                      id="cardType"
                      placeholder="Card Type"
                      value={values.cardType}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
