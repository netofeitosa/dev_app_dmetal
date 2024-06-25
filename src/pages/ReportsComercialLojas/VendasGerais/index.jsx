import React, { useEffect, useLayoutEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import { useApi } from "../../../hooks/useApi";

import { Section, ChartResume, Chart } from "./vendasgerais.style";
import ChartVendasGerais from "../../../components/Charts/ChartVendasGerais";

const VendasGerais = () => {
  const [dados, setDados] = useState();
  const [removeLoading, setRemoveLoading] = useState(false);
  const { setPageTitle } = useOutletContext();
  const api = useApi();

  useLayoutEffect(() => {
    setPageTitle("Vendas Gerais");
  }, [setPageTitle]);

  useEffect(() => {
    const getDados = async () => {
      try {
        const [response] = await api.getVendasGerais();
        setDados(response);
        setRemoveLoading(true);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    getDados();
  }, []);

  function NumberFormated(value) {
    if (value >= 1000000000) {
      return (value / 1000000000).toFixed(1) + "B";
    } else if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + "M";
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + "K";
    } else {
      return value.toFixed(0);
    }
  }

  return !removeLoading ? (
    <Spinner />
  ) : (
    <Section>
      <ChartResume
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.1 }}
      >
        <Chart>
          <ChartVendasGerais dados={dados} />
        </Chart>
      </ChartResume>
    </Section>
  );
};

export default VendasGerais;
