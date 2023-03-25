import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext, { getTokenDuration } from "../store/auth-context";

const ProtectedRoute = () => {
  const authCtx = useContext(AuthContext);
  const result = getTokenDuration();
  if (result <= 0) authCtx.logout();
  return <>{result > 0 ? <Outlet /> : <Navigate to="/login" />};</>;
};

export default ProtectedRoute;
