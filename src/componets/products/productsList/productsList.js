import Container from "../../UI/container/container";
import ProductsItem from "../productsItem/productsItem";
import classes from "./productsList.module.css";

const ProductList = (props) => {
  const { listProduct } = props;
  return (
    <Container>
      <div className={classes.Products}>
        {listProduct.map((item) => (
          <ProductsItem
            key={item.id}
            id={item.id}
            name={item.title}
            imgUrl={item.thumbnail}
            price={item.price}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
