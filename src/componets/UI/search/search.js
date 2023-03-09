import classes from "./search.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = (props) => {
  const { onReturnValue } = props;

  return (
    <div className={`${classes.containerSearch} mb-4`}>
      <div className={classes.searchForm}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search your product"
        />
        <button className={classes.btnClearInput} type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default Search;
