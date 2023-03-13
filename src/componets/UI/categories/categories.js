import { Fragment } from "react";
import classes from "./categories.module.css";
import { categoryList } from "../../../store/icons-category";

const Categories = (props) => {
  const { listCategories } = props;
  return (
    <Fragment>
      {listCategories.map((item) => (
        <div key={item.id} className={classes.CategoryCard}>
          {categoryList[`${item.id}`]}
          <span>{item.name}</span>
        </div>
      ))}
    </Fragment>
  );
};

export default Categories;
