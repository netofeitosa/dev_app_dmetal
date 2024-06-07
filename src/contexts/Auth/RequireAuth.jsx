import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

import Spinner from "../../components/Spinner";

export const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (auth.isLoading) {
      setLoading(true);
    } else if (!auth.user) {
      navigate("/");
    } else {
      setLoading(false);
    }
  }, [auth.user, auth.isLoading, navigate]);

  if (loading) {
    return <Spinner />;
  }

  return children;
};
