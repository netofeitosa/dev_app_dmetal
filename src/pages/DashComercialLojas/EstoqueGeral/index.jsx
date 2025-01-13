import React, { useEffect, useLayoutEffect, useState } from "react";
import Spinner from "../../../components/Spinner";
import { useApi } from "../../../hooks/useApi";
import { useOutletContext } from "react-router-dom";
import { Divider, FloatButton } from "antd";
import ChartEstoqueGeral from "../../../components/Charts/ChartEstoqueGeral";

import {
  Chart,
  ChartResume,
  Section,
  SectionDivider,
  Table,
} from "./estoquegeral.style";
import TableEstoqueGeral from "../../../components/Tables/TableEstoqueGeral";

const EstoqueGeral = () => {
  const [dados, setDados] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);
  const { setPageTitle } = useOutletContext();
  const api = useApi();

  useLayoutEffect(() => {
    setPageTitle("Estoque Geral");
  }, [setPageTitle]);

  useEffect(() => {
    const getDados = async () => {
      try {
        const response = await api.getEstoqueGeral();
        setDados(response);
        setRemoveLoading(true);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    getDados();
  }, []);

  return !removeLoading ? (
    <Spinner />
  ) : (
    <Section
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.2 }}
    >
      <ChartResume>
        <Chart>
          <ChartEstoqueGeral dados={dados} tipo={"marca"} />
        </Chart>
        <Chart>
          <ChartEstoqueGeral dados={dados} tipo={"tecido"} />
        </Chart>
      </ChartResume>
      <SectionDivider>
        <Divider orientation="center" plain>
          Detalhes
        </Divider>
      </SectionDivider>
      <Table>
        <TableEstoqueGeral dados={dados}></TableEstoqueGeral>
        <FloatButton.BackTop />
      </Table>
    </Section>
  );
};

export default EstoqueGeral;
