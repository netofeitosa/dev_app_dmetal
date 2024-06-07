import React, { useEffect, useLayoutEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import TableAprovacoesDespesas from "../../components/TableAprovacoesDespesas";
import { Container } from "./aprovacoesdespesas.style";
import { useOutletContext } from "react-router-dom";
import { useApi } from "../../hooks/useApi";

const AprovacoesDespesas = () => {
  const [despesas, setDespesas] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);
  const { setPageTitle } = useOutletContext();
  const api = useApi();

  useLayoutEffect(() => {
    setPageTitle("Despesas");
  }, [setPageTitle]);

  const getDespesas = async () => {
    setRemoveLoading(false);
    try {
      const response = await api.getDespesas();
      setDespesas(response);
    } catch (error) {
      console.log(error);
    } finally {
      setRemoveLoading(true);
    }
  };

  useEffect(() => {
    getDespesas();
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
        <TableAprovacoesDespesas
          value={despesas ? despesas : []}
          getDespesas={getDespesas}
        />
      )}
    </Container>
  );
};

export default AprovacoesDespesas;
