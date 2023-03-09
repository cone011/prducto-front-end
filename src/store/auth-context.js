import { useEffect, createContext } from "react";

const AuthContext = createContext({
  token: "",
  isLogged: false,
  login: (token, expirationDate) => {},
  logout: () => {},
});

export function getTokenDuration() {
  const storedTokenDateExpiration = localStorage.getItem("token");
  const expirationDate = new Date(storedTokenDateExpiration);
  const now = new Date();
  const duration = expirationDate.getDate() - now.getDate();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) return "EXPIRED";
  return token;
}
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
}

export function login(token, expirationDate) {
  localStorage.setItem("token");
  localStorage.setItem("expiration");
}

export const AuthContextProvider = (props) => {
  const { children } = props;
  const tokenData = getAuthToken();

  const isAuthUser = tokenData ? true : false;

  useEffect(() => {
    if (!tokenData) {
      logout();
    }
  }, [tokenData, logout]);

  const contextValue = {
    token: tokenData,
    isLogged: isAuthUser,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
