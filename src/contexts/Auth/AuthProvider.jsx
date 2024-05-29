import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const api = useApi();

  useEffect(() => {
    const validadeToken = async () => {
      const authToken = localStorage.getItem("authToken");
      const validateToken = localStorage.getItem("validateToken");
      if (authToken && validateToken) {
        const data = await api.validadeToken(authToken, validateToken);
        if (data) {
          setUser(data);
        } else {
          signout();
        }
      } else {
        signout();
      }
      setIsLoading(false);
    };
    validadeToken();
  }, []);

  const signin = async ({ user, password }) => {
    const data = await api.signin(user, password);
    if (data) {
      setUser(data);
      const expirationMs = 3600000; // 1 hora
      setToken(data.token, expirationMs);
      return true;
    }
    return false;
  };

  const signout = async () => {
    localStorage.clear();
    setUser(null);
  };

  const setToken = (token, expirationMs) => {
    const now = new Date().getTime();
    const validateToken = now + expirationMs;

    localStorage.setItem("authToken", token);
    localStorage.setItem("validateToken", validateToken);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
