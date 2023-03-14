import { useEffect, useCallback, useState, Fragment } from "react";
import { getAllCategory } from "../api/categoryApi";

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
    </Fragment>
  );
};

export default Home;
