import React, { useEffect, useLayoutEffect, useState } from "react";
import { Api } from "../../services/api";
import Spinner from "../../components/Spinner";
import TableAprovacoesDespesas from "../../components/TableAprovacoesDespesas";
import { Container } from "./aprovacoesdespesas.style";
import { useOutletContext } from "react-router-dom";

const AprovacoesDespesas = () => {
  const [despesas, setDespesas] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);
  const { setPageTitle } = useOutletContext();

  useLayoutEffect(() => {
    setPageTitle("Despesas");
  }, [setPageTitle]);

  const getDespesas = async () => {
    setRemoveLoading(false);
    try {
      const response = await Api.get("/despesas");
      setDespesas(response.data);
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
        <TableAprovacoesDespesas value={despesas} getDespesas={getDespesas} />
      )}
    </Container>
  );
};

export default AprovacoesDespesas;
