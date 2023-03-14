import { Form } from "react-bootstrap";
import classes from "./filters.module.css";

const Filter = (props) => {
  const { listCategory } = props;
  console.log(listCategory);
  return (
    <div className={classes.Filter}>
      <span className={classes.Title}>Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-2`}
        />
      </span>
    </div>
  );
};

export default Filter;
