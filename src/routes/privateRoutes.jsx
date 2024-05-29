import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider/useAuth";

export const PrivateRoutes = ({ children }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.token) {
    navigate("/app_dmetal_dev");
    return null;
  }

  const currentTime = new Date().getTime();
  if (auth.tokenExpiration < currentTime) {
    auth.logout();
    navigate("/app_dmetal_dev");
    return null;
  }

  return children;
};
