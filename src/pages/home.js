import { useEffect, useCallback, useState, Fragment } from "react";
import { getAllCategory } from "../api/categoryApi";
import HeaderCarrousel from "../componets/UI/headerCarrousel/headerCarrousel";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const assigmentData = useCallback(async () => {
    let result = await getAllCategory();
    setCategories(result);
  }, []);

  useEffect(() => {
    assigmentData();
  }, [assigmentData]);

  return (
    <Fragment>
      <p>home</p>
      <HeaderCarrousel />
    </Fragment>
  );
};

export default Home;
