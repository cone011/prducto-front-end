import { useRef, useReducer, useContext, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../../api/userApi";
import { todoReducer } from "../../../context/reducer";
import { defaultTodoReducer } from "../../../util/const";
import classes from "./signup.module.css";
import AuthContext from "../../../store/auth-context";
import { getTokenDuration } from "../../../store/auth-context";
import CustomModal from "../../UI/customModal/customModal";

const SignUp = () => {
  const userInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [todo, dispatchTodo] = useReducer(todoReducer, defaultTodoReducer);

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!userInputRef.current.value) {
        dispatchTodo({
          type: "SET_ERROR",
          typeModal: "ERROR",
          message: "There is no user to sign in",
        });
        return;
      }

      if (!passwordInputRef.current.value) {
        dispatchTodo({
          type: "SET_ERROR",
          typeModal: "ERROR",
          message: "There is no password to sign in",
        });
        return;
      }

      if (!confirmPasswordInputRef.current.value) {
        dispatchTodo({
          type: "SET_ERROR",
          typeModal: "ERROR",
          message: "There is no confirm password to sign in",
        });
        return;
      }

      const usuario = userInputRef.current.value;

      const password = passwordInputRef.current.value;

      const confirmPassword = confirmPasswordInputRef.current.value;

      const response = await signUp({
        email: usuario,
        password: password,
        confirmPassword: confirmPassword,
      });

      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 1);
      authCtx.login(response.token, expiration);
      const tokenDuration = getTokenDuration();
      if (tokenDuration > 0) navigate("/");
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
          </div>
          <div className={classes.control}>
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              ref={confirmPasswordInputRef}
            />
          </div>
          <div className={classes.control}>
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

export default SignUp;
