import { useNavigate } from "react-router-dom";
import { getTokenDuration } from "../../store/auth-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import classes from "./home.module.css";

const Home = () => {
  const tokenDuration = getTokenDuration();
  const navigate = useNavigate();

  const onSendToAnotherPage = () => {
    if (tokenDuration > 0) {
      navigate("/product");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className={classes.Home}>
      <div className={classes.Description}>
        <h2>
          {tokenDuration > 0
            ? "Ingreso Haga click en el icono para empezar"
            : "Favor Ingresar"}
        </h2>
        <div className={classes.Buttons}>
          {tokenDuration > 0 ? (
            <FontAwesomeIcon icon={faShirt} onClick={onSendToAnotherPage} />
          ) : (
            <FontAwesomeIcon
              icon={faRightToBracket}
              onClick={onSendToAnotherPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
