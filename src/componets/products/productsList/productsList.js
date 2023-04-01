import Container from "../../UI/container/container";
import Search from "../../UI/search/search";
import ProductsItem from "../productsItem/productsItem";
import classes from "./productsList.module.css";

const ProductList = (props) => {
  const { listProduct, onSearchValue } = props;
  return (
    <Container>
      <Search onReturnValue={onSearchValue} />
      <div className={classes.Products}>
        {listProduct.map((item) => (
          <ProductsItem
            key={item.id}
            id={item.id}
            name={item.title}
            imgUrl={item.picture}
            price={item.price}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
