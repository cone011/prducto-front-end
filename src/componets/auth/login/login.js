import { useRef, Fragment, useContext, useReducer } from "react";
import classes from "./login.module.css";
import { login } from "../../../api/userApi";
import AuthContext from "../../../store/auth-context";
import { defaultTodoReducer } from "../../../util/const";
import CustomModal from "../../UI/customModal/customModal";

const todoReduce = (curTodo, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return {
        ...curTodo,
        error: true,
        message: action.message,
        typeModal: action.typeModal,
      };
    case "END":
      return { ...curTodo, error: false };
    default:
      throw new Error("There is no action to do");
  }
};

const Login = () => {
  const authCtx = useContext(AuthContext);
  const userInputRef = useRef();
  const passwordInputRef = useRef();
  const [todo, dispatchTodo] = useReducer(todoReduce, defaultTodoReducer);

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!userInputRef.current.value) {
        dispatchTodo({
          type: "SET_ERROR",
          typeModal: "ERROR",
          message: "There is no user to log in",
        });
        return;
      }

      if (!passwordInputRef.current.value) {
        dispatchTodo({
          type: "SET_ERROR",
          typeModal: "ERROR",
          message: "There is no password to log in",
        });
        return;
      }

      const usuario = userInputRef.current.value;

      const password = passwordInputRef.current.value;

      const response = await login({ email: usuario, password: password });

      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 1);
      authCtx.login(response.token, expiration);
    } catch (err) {
      dispatchTodo({
        type: "SET_ERROR",
        typeModal: "ERROR",
        message: `${err}`,
      });
    }
  };

  const onCloseModal = () => {
    dispatchTodo({ type: "END" });
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
            <input type="password" id="password" ref={passwordInputRef} />
            <div className={classes.actions}>
              <button type="submit" className={classes.toggle}>
                Login
              </button>
            </div>
          </div>
        </form>
      </section>
      {todo.error && (
        <CustomModal
          typeModal={todo.typeModal}
          onCloseModal={onCloseModal}
          message={todo.message}
        />
      )}
    </Fragment>
  );
};

export default Login;
