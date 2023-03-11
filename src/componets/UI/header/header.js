import { Fragment, useContext } from "react";
import classes from "./header.module.css";
import AuthContext from "../../../store/auth-context";
import HeaderCartButton from "../headerCartButton/headerCartButton";

const Header = (props) => {
  const { onShowCart } = props;
  const authCtx = useContext(AuthContext);

  const onLogOut = () => {
    authCtx.logout();
  };

  return (
    <Fragment>
      <header className={classes.Header}>
        <h1>Fake Commer</h1>
        <HeaderCartButton onClick={onShowCart} />
        <button onClick={onLogOut}>Log Out</button>
      </header>
    </Fragment>
  );
};

export default Header;
