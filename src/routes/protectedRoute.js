import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext, { getTokenDuration } from "../store/auth-context";

const ProtectedRoute = () => {
  const authCtx = useContext(AuthContext);
  const result = getTokenDuration();
  console.log(result);
  if (result <= 0) authCtx.logout();
  return <>{authCtx.isLogged ? <Outlet /> : <Navigate to="/login" />};</>;
};

export default ProtectedRoute;
