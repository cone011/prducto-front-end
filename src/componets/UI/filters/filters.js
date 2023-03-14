import { Form } from "react-bootstrap";
import classes from "./filters.module.css";

const Filter = (props) => {
  const { listCategory, onReturnCategoryValue } = props;
  const onChangeValueSelecetd = (e) => {
    onReturnCategoryValue(e.target.value);
  };
  return (
    <div className={classes.Filter}>
      <span className={classes.Title}>Filter Products</span>
      <span>
        <Form.Select
          aria-label="Default select example"
          onChange={onChangeValueSelecetd}
        >
          {listCategory.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </Form.Select>
      </span>
    </div>
  );
};

export default Filter;
