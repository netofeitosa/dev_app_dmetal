import React, { useLayoutEffect } from "react";
import { useLocation, useOutletContext } from "react-router-dom";

import { Container } from "./analisereferenciasresult.style";
import TableAnaliseReferencias from "../../../../components/Tables/TableAnalisereferencias";

const AnaliseReferenciasResult = () => {
  const location = useLocation();
  const { setPageTitle } = useOutletContext();
  const dados = location.state;

  useLayoutEffect(() => {
    setPageTitle("Análise de Referências");
  }, [setPageTitle]);

  if (dados.ultima_atualizacao === 0) {
    return (
      <Container
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.1 }}
      >
        <p>Nenhum dado foi enviado.</p>;
      </Container>
    );
  }

  return (
    <Container
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.1 }}
    >
      <TableAnaliseReferencias value={dados ? dados : []} />
    </Container>
  );
};

export default AnaliseReferenciasResult;
