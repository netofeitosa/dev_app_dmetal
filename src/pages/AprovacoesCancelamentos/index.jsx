import React, { useEffect, useLayoutEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import Spinner from "../../components/Spinner";
import TableAprovacoesCancelamentos from "../../components/TableAprovacoesCancelamentos";

import { Container } from "./aprovacoescancelamentos.style";
import { useOutletContext } from "react-router-dom";

const AprovacoesCancelamentos = () => {
  const [cancelamentos, setCancelamentos] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);
  const { setPageTitle } = useOutletContext();
  const api = useApi();

  useLayoutEffect(() => {
    setPageTitle("Cancelamentos");
  }, [setPageTitle]);

  const getCancelamentos = async () => {
    setRemoveLoading(false);
    try {
      const response = await api.getCancelamentos();
      setCancelamentos(response);
    } catch (error) {
      console.log(error);
    } finally {
      setRemoveLoading(true);
    }
  };

  useEffect(() => {
    getCancelamentos();
  }, []);

  return (
    <Container
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.1 }}
    >
      {!removeLoading ? (
        <Spinner />
      ) : (
        <TableAprovacoesCancelamentos
          value={cancelamentos ? cancelamentos : []}
          getCancelamentos={getCancelamentos}
        />
      )}
    </Container>
  );
};

export default AprovacoesCancelamentos;
