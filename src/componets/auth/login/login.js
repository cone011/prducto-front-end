import { useRef, Fragment, useContext } from "react";
import classes from "./login.module.css";
import { login } from "../../../api/userApi";
import AuthContext from "../../../store/auth-context";

const Login = () => {
  const authCtx = useContext(AuthContext);
  const userInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!userInputRef.current.value) {
      return;
    }

    if (!passwordInputRef.current.value) {
      return;
    }

    const usuario = userInputRef.current.value;

    const password = passwordInputRef.current.value;

    const response = await login({ email: usuario, password: password });

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    authCtx.login(response.token, expiration);
  };

  return (
    <Fragment>
      <section className={classes.auth}>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="user">Usuario</label>
            <input type="text" id="user" required ref={userInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
            <div className={classes.actions}>
              <button type="submit" className={classes.toggle}>
                Login
              </button>
            </div>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default Login;
