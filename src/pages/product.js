import { Fragment, useCallback, useEffect, useReducer, useState } from "react";
import { getProductoCategory, getSearchProducto } from "../api/productApi";
import { getAllCategory } from "../api/categoryApi";
import { defaultTodoReducer } from "../util/const";
import { todoReducer } from "../context/reducer";
import ProductList from "../componets/products/productsList/productsList";
import CustomModal from "../componets/UI/customModal/customModal";
import classes from "./product.module.css";
import Filter from "../componets/UI/filters/filters";

const Product = () => {
  const [listProduct, setListProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [todo, dispatchTodo] = useReducer(todoReducer, defaultTodoReducer);
  const assigmentData = useCallback(async () => {
    try {
      dispatchTodo({ type: "SET_LOADING", message: "LOADING" });
      let result = await getProductoCategory("MLA5725");
      let resultCategories = await getAllCategory();
      let dataObtain = result.results;
      setListProduct(dataObtain);
      setCategories(resultCategories);
      dispatchTodo({ type: "END" });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const onSearchByCategory = async (valueReturn) => {
    try {
      dispatchTodo({ type: "SET_LOADING", message: "LOADING" });
      let result = await getProductoCategory(valueReturn);
      let dataObtain = result.results;
      setListProduct(dataObtain);
      dispatchTodo({ type: "END" });
    } catch (err) {
      console.log(err);
    }
  };

  const onSearchData = async (dataValue) => {
    try {
      dispatchTodo({ type: "SET_LOADING", message: "LOADING" });
      let result = await getSearchProducto(dataValue);
      let dataObtain = result.result.results;
      setListProduct(dataObtain);
      dispatchTodo({ type: "END" });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    assigmentData();
  }, [assigmentData]);

  return (
    <Fragment>
      <div className={classes.Home}>
        <Filter
          listCategory={categories}
          onReturnCategoryValue={onSearchByCategory}
        />
        <ProductList listProduct={listProduct} onSearchValue={onSearchData} />
      </div>
      {todo.isLoading && (
        <CustomModal typeModal={todo.typeModal} message={todo.message} />
      )}
    </Fragment>
  );
};

export default Product;
