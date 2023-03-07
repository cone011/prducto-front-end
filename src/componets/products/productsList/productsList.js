import Container from "../../UI/container/container";
import ProductsItem from "../productsItem/productsItem";
import classes from "./productsList.module.css";

const ProductList = () => {
  const listProduct = [
    {
      name: "Placa De Video Nvidia Zotac  Gaming Geforce Rtx 30 Series Rtx 3080 Ti Zt-a30810d-10p 12gb",
      imgUrl: "http://http2.mlstatic.com/D_839175-MLA50594137135_072022-I.jpg",
      price: 339999,
    },
  ];
  return (
    <Container>
      <h2>Some Products</h2>
      <div className={classes.Products}>
        {listProduct.map((item) => (
          <ProductsItem
            name={item.name}
            imgUrl={item.imgUrl}
            price={item.price}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
