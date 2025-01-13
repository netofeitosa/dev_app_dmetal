import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useApi } from "../../hooks/useApi";
import { message } from "antd";

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
          const imageBlob = await api.getImage(data.token);
          if (imageBlob.size > 0) {
            const profileImageUrl = imageBlob
              ? URL.createObjectURL(imageBlob)
              : null;
            setUser({ ...data, profileImage: profileImageUrl });
          } else {
            setUser({ ...data, profileImage: null });
          }
        } else {
          message.error({
            content: "Sessão expirada! Logue novamente.",
            duration: 2,
          });
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
    try {
      const data = await api.signin(user, password);
      if (data) {
        const expirationMs = 3600000;
        setToken(data.token, expirationMs);

        const imageBlob = await api.getImage(data.token);
        if (imageBlob.size > 0) {
          const profileImageUrl = imageBlob
            ? URL.createObjectURL(imageBlob)
            : null;
          setUser({ ...data, profileImage: profileImageUrl });
        } else {
          setUser({ ...data, profileImage: null });
        }
        return true;
      }
      return false;
    } catch (error) {
      return error;
    }
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
    <AuthContext.Provider value={{ user, setUser, isLoading, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
