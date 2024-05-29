import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

import Spinner from "../../components/Spinner";

export const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  // if (!auth.user) {
  //   navigate("/app_dmetal_dev");
  //   return null;
  // }

  // useEffect(() => {
  //   if (!auth.user) {
  //     navigate("/app_dmetal_dev");
  //   }
  // }, [auth.user, navigate]);

  useEffect(() => {
    if (auth.isLoading) {
      // Aguarda até que a autenticação seja carregada
      setLoading(true);
    } else if (!auth.user) {
      // Redireciona se não houver usuário autenticado
      navigate("/app_dmetal_dev");
    } else {
      // Se o usuário está autenticado, remove o estado de carregamento
      setLoading(false);
    }
  }, [auth.user, auth.isLoading, navigate]);

  if (loading) {
    return <Spinner />;
  }

  return children;
};
