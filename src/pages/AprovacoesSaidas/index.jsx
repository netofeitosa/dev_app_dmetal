import React, { useEffect, useState } from "react";
import { Api } from "../../services/api";
import Spinner from "../../components/Spinner";
import TableAprovacoesSaidas from "../../components/TableAprovacoesSaidas";
import { Container } from "./aprovacoessaidas.style";

const AprovacoesSaidas = () => {
  const [saidas, setSaidas] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);

  const getSaidas = async () => {
    setRemoveLoading(false);
    try {
      const response = await Api.get("/saidas-avulsas");
      setSaidas(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setRemoveLoading(true);
    }
  };

  useEffect(() => {
    getSaidas();
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
        <TableAprovacoesSaidas value={saidas.saidas} getSaidas={getSaidas} />
      )}
    </Container>
  );
};

export default AprovacoesSaidas;
