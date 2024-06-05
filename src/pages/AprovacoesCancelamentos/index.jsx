import React, { useEffect, useLayoutEffect, useState } from "react";
import { Api } from "../../services/api";
import Spinner from "../../components/Spinner";
import TableAprovacoesCancelamentos from "../../components/TableAprovacoesCancelamentos";

import { Container } from "./aprovacoescancelamentos.style";
import { useOutletContext } from "react-router-dom";

const AprovacoesCancelamentos = () => {
  const [cancelamentos, setCancelamentos] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);
  const { setPageTitle } = useOutletContext();

  useLayoutEffect(() => {
    setPageTitle("Cancelamentos");
  }, [setPageTitle]);

  const getCancelamentos = async () => {
    setRemoveLoading(false);
    try {
      const response = await Api.get("/cancelamentos");
      setCancelamentos(response.data);
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
          value={cancelamentos}
          getCancelamentos={getCancelamentos}
        />
      )}
    </Container>
  );
};

export default AprovacoesCancelamentos;
