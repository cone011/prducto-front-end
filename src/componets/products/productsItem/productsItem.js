import classes from "./productsItem.module.css";

const ProductsItem = (props) => {
  const { name, imgUrl, price, key } = props;
  return (
    <div className={classes.ProductItem}>
      <h3>{name}</h3>
      <img src={imgUrl} alt={name} />
      <span className={classes.Price}>${price}</span>
      <button>View More Info</button>
    </div>
  );
};

export default ProductsItem;
