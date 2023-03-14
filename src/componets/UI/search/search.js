import classes from "./search.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Search = (props) => {
  const { onReturnValue } = props;
  const [valueSearch, setValueSearch] = useState("");

  const onSearchHandlerChange = (event) => {
    if (!event.target.value) return;
    setValueSearch(event.target.value);
  };

  const onClickSearchValue = () => {
    onReturnValue(valueSearch);
  };

  return (
    <div className={classes.searchForm}>
      <input
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search your product"
        onChange={onSearchHandlerChange}
      />
      <button
        className={classes.btnClearInput}
        type="button"
        onClick={onClickSearchValue}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default Search;
