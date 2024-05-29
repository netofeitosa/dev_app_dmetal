import React, { createContext, useEffect, useState } from "react";
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userLocal = getUserLocalStorage();
    if (userLocal) {
      setUser(userLocal);
    }
  }, []);

  async function authenticate({ user, password }) {
    const response = await LoginRequest(user, password);

    const payload = {
      token: response.token,
      login: response.login,
      nome: response.nome,
      image: response.image,
    };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  async function logout() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        ...user,
        authenticate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
