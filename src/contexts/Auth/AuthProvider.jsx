import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const api = useApi();

  useEffect(() => {
    const validadeToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (storageData) {
        const data = await api.validadeToken(storageData);
        if (data) {
          setUser(data);
        } else {
          signout();
        }
      }
      setIsLoading(false);
    };
    validadeToken();
  }, []);

  const signin = async ({ user, password }) => {
    const data = await api.signin(user, password);
    if (data) {
      setUser(data);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signout = async () => {
    localStorage.clear();
    setUser(null);
  };

  const setToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
