import { Fragment } from "react";
import classes from "./header.module.css";

const Header = (props) => {
  const { onShowCart } = props;
  return (
    <Fragment>
      <header className={classes.Header}>
        <h1>Fake Commer</h1>
        <button onClick={onShowCart}></button>
      </header>
    </Fragment>
  );
};

export default Header;
