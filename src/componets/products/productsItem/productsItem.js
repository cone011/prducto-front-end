import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import classes from "./productsItem.module.css";

const ProductsItem = (props) => {
  const { name, imgUrl, price, id } = props;
  const navigate = useNavigate();

  const onSendToProductoDetail = async () => {
    navigate(`/product-detail`, { state: { id: id } });
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
          <Button onClick={onSendToProductoDetail}>View Product</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductsItem;
