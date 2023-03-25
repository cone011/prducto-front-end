import { Fragment, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./header.module.css";
import AuthContext, { getTokenDuration } from "../../../store/auth-context";
import HeaderCartButton from "../headerCartButton/headerCartButton";

const Header = (props) => {
  const { onShowCart } = props;
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const tokenDuration = getTokenDuration();

  const onLogOut = () => {
    authCtx.logout();
    navigate("/");
  };

  const onSaveHomePage = () => {
    navigate("/");
  };

  const showActions = (
    <Fragment>
      <HeaderCartButton onClick={onShowCart} />
      <button onClick={onLogOut} className={classes.btnLogout}>
        Log Out
      </button>
    </Fragment>
  );

  const showActionLogOut = (
    <div className={classes.Links}>
      <Link to="/signup"> Sign Up </Link>
    </div>
  );

  return (
    <Fragment>
      <header className={classes.Header}>
        <h1 onClick={onSaveHomePage}>Fake Commer</h1>
        {tokenDuration > 0 && showActions}
        {tokenDuration <= 0 && showActionLogOut}
      </header>
    </Fragment>
  );
};

export default Header;
